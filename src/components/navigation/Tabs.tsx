import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeIcon, MessageIcon, SearchIcon, SettingsIcon } from "../ui";

type TabKey = keyof MainTabParamList;
const tabConfig: {
  key: TabKey;
  icon: React.FC<{ selected: boolean }>;
}[] = [
  { key: "Home", icon: HomeIcon },
  { key: "Search", icon: SearchIcon },
  { key: "Messages", icon: MessageIcon },
  { key: "Settings", icon: SettingsIcon },
];

export const Tabs = () => {
  const { tabStyles } = useStyles();
  const { t } = useTranslation("tabs");
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const route = useRoute();

  return (
    <View style={tabStyles.container}>
      {tabConfig.map(({ key, icon: Icon }) => {
        const isSelected = route.name === key;
        return (
          <TouchableOpacity
            key={key}
            onPress={() => navigation.navigate(key)}
            style={[tabStyles.tab, isSelected && tabStyles.tabSelected]}
            accessibilityLabel={t(key.toLowerCase())}
          >
            <Icon selected={isSelected} />
            {isSelected && (
              <Text style={tabStyles.label}>{t(key.toLowerCase())}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
