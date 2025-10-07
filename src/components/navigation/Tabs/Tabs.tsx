import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics";
import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeIcon, MessageIcon, SearchIcon, SettingsIcon } from "../../ui";
import { TabKey, TabProps } from "./Tabs.types";

const tabConfig: {
  key: TabKey;
  icon: React.FC<{ selected: boolean }>;
}[] = [
  { key: "Home", icon: HomeIcon },
  { key: "Search", icon: SearchIcon },
  { key: "Messages", icon: MessageIcon },
  { key: "Settings", icon: SettingsIcon },
];

const Tab = React.memo(
  ({ tabKey, Icon, isSelected, label, onPress }: TabProps) => {
    const { tabStyles } = useStyles();

    const handlePress = useCallback(() => {
      if (!isSelected) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress(tabKey);
      }
    }, [tabKey, isSelected, onPress]);

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[tabStyles.tab, isSelected && tabStyles.tabSelected]}
        accessibilityRole="tab"
        accessibilityState={{ selected: isSelected }}
        accessibilityLabel={label}>
        <Icon selected={isSelected} />
        {isSelected && <Text style={tabStyles.label}>{label}</Text>}
      </TouchableOpacity>
    );
  }
);

Tab.displayName = "Tab";

export const Tabs = React.memo(() => {
  const { tabStyles } = useStyles();
  const { t } = useTranslation("tabs");
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const route = useRoute();

  const handleTabPress = useCallback(
    (key: TabKey) => {
      navigation.navigate(key);
    },
    [navigation]
  );

  const tabs = useMemo(
    () =>
      tabConfig.map(({ key, icon: Icon }) => (
        <Tab
          key={key}
          tabKey={key}
          Icon={Icon}
          isSelected={route.name === key}
          label={t(key.toLowerCase())}
          onPress={handleTabPress}
        />
      )),
    [route.name, t, handleTabPress]
  );

  return <View style={tabStyles.container}>{tabs}</View>;
});

Tabs.displayName = "Tabs";

export default Tabs;
