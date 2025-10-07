import { MainTabParamList } from "@/navigation/types";

export type TabKey = keyof MainTabParamList;

export type TabProps = {
  tabKey: TabKey;
  Icon: React.FC<{ selected: boolean }>;
  isSelected: boolean;
  label: string;
  onPress: (key: TabKey) => void;
};
