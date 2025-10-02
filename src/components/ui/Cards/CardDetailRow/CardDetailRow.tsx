import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { Text, View } from "react-native";
import { createCardDetailRowStyles } from "./CardDetailRow.styles";
import { CardDetailRowProps } from "./CardDetailRow.types";

export const CardDetailRow = ({ label, value }: CardDetailRowProps) => {
  const { globalStyles } = useStyles();
  const { theme } = useTheme();
  const styles = createCardDetailRowStyles(theme);
  return (
    <View style={styles.textContainer}>
      <Text style={[globalStyles.body1, styles.label]}>{label}</Text>
      <Text style={globalStyles.title3}>{value}</Text>
    </View>
  );
};
