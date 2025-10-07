import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import { Text, TouchableOpacity } from "react-native";
import { createCardDetailRowStyles } from "./CardDetailRow.styles";
import { CardDetailRowProps } from "./CardDetailRow.types";

export const CardDetailRow = ({
  label,
  value,
  labelStyle,
  valueStyle,
  onPress,
}: CardDetailRowProps) => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const styles = createCardDetailRowStyles(theme);
  return (
    <TouchableOpacity style={styles.textContainer} onPress={onPress}>
      {typeof label === "string" ? (
        <Text style={[globalStyles.body1, styles.label, labelStyle]}>
          {label}
        </Text>
      ) : (
        label
      )}
      {typeof value === "string" ? (
        <Text style={[globalStyles.title3, valueStyle]}>{value}</Text>
      ) : (
        value
      )}
    </TouchableOpacity>
  );
};
