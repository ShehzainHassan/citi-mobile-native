import { useStyles } from "@/hooks/useStyles";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { HomeIcon, MessageIcon, SearchIcon, SettingsIcon } from "../ui";

type TabKey = "home" | "search" | "message" | "settings";

const tabConfig: {
  key: TabKey;
  icon: React.FC<{ selected: boolean }>;
}[] = [
  { key: "home", icon: HomeIcon },
  { key: "search", icon: SearchIcon },
  { key: "message", icon: MessageIcon },
  { key: "settings", icon: SettingsIcon },
];

export const Tabs = () => {
  const { tabStyles } = useStyles();
  const [selectedTab, setSelectedTab] = useState<TabKey>("home");
  const { t } = useTranslation("tabs");

  return (
    <View style={tabStyles.container}>
      {tabConfig.map(({ key, icon: Icon }) => {
        const isSelected = key === selectedTab;
        return (
          <TouchableOpacity
            key={key}
            onPress={() => setSelectedTab(key)}
            style={[tabStyles.tab, isSelected && tabStyles.tabSelected]}
            accessibilityLabel={t(key)}>
            <Icon selected={isSelected} />
            {isSelected && <Text style={tabStyles.label}>{t(key)}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
