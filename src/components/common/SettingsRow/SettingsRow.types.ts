export interface SettingsRowProps {
  label: string;
  onPress?: () => void;
  showChevron?: boolean;
  showToggle?: boolean;
  initialToggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
}
