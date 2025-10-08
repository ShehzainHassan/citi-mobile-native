import { useTabStyles } from "@/hooks";
import { TranslationKeys } from "@/i18n";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics";
import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { HomeIcon, MessageIcon, SearchIcon, SettingsIcon } from "../../ui";
import { TabKey, TabProps } from "./Tabs.types";

const tabConfig: {
  key: TabKey;
  icon: React.FC<{ selected: boolean }>;
  labelKey: string;
}[] = [
  { key: "Home", icon: HomeIcon, labelKey: TranslationKeys.tabs.home },
  { key: "Search", icon: SearchIcon, labelKey: TranslationKeys.tabs.search },
  {
    key: "Messages",
    icon: MessageIcon,
    labelKey: TranslationKeys.tabs.messages,
  },
  {
    key: "Settings",
    icon: SettingsIcon,
    labelKey: TranslationKeys.tabs.settings,
  },
];

const Tab = React.memo(
  ({ tabKey, Icon, isSelected, label, onPress }: TabProps) => {
    const tabStyles = useTabStyles();

    const handlePress = useCallback(() => {
      if (!isSelected) {
        if (Platform.OS !== "web") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress(tabKey);
      }
    }, [tabKey, isSelected, onPress]);

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[tabStyles.tab, isSelected && tabStyles.tabSelected]}
        accessibilityRole="tab"
        accessibilityState={{ selected: isSelected }}
        accessibilityLabel={label}
      >
        <Icon selected={isSelected} />
        {isSelected && <Text style={tabStyles.label}>{label}</Text>}
      </TouchableOpacity>
    );
  },
);

Tab.displayName = "Tab";

export const Tabs = React.memo(() => {
  const tabStyles = useTabStyles();
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const route = useRoute();

  const handleTabPress = useCallback(
    (key: TabKey) => {
      navigation.navigate(key);
    },
    [navigation],
  );

  const tabs = useMemo(
    () =>
      tabConfig.map(({ key, icon: Icon, labelKey }) => (
        <Tab
          key={key}
          tabKey={key}
          Icon={Icon}
          isSelected={route.name === key}
          label={t(labelKey)}
          onPress={handleTabPress}
        />
      )),
    [route.name, t, handleTabPress],
  );

  return <View style={tabStyles.container}>{tabs}</View>;
});

Tabs.displayName = "Tabs";

export default Tabs;
