import { Images } from "@/assets/images";
import { useStyles } from "@/hooks/useStyles";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const tabs = [
  {
    key: "home",
    label: "Home",
    icon: Images.home,
    selectedIcon: Images.homeSelected,
  },
  {
    key: "search",
    label: "Search",
    icon: Images.search,
    selectedIcon: Images.searchSelected,
  },
  {
    key: "message",
    label: "Messages",
    icon: Images.message,
    selectedIcon: Images.messageSelected,
  },
  {
    key: "settings",
    label: "Settings",
    icon: Images.settings,
    selectedIcon: Images.settingsSelected,
  },
];

export const Tabs = () => {
  const { tabStyles } = useStyles();
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <View style={[tabStyles.container]}>
      {tabs.map((tab) => {
        const isSelected = tab.key === selectedTab;
        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setSelectedTab(tab.key)}
            style={[tabStyles.tab, isSelected && tabStyles.tabSelected]}>
            <Image
              source={isSelected ? tab.selectedIcon : tab.icon}
              style={tabStyles.icon}
            />
            {isSelected && <Text style={tabStyles.label}>{tab.label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
