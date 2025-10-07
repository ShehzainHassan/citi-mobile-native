import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/theme";
import { CardDetailRow } from "@/components/ui";
import { SettingsRowProps } from "./SettingsRow.types";

export const SettingsRow: React.FC<SettingsRowProps> = ({
  label,
  onPress,
  showChevron = true,
}) => {
  const { theme } = useTheme();

  return (
    <CardDetailRow
      label={label}
      value={
        showChevron && (
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={theme.colors.neutral5}
          />
        )
      }
      {...(onPress ? { onPress } : {})}
    />
  );
};

export default SettingsRow;
