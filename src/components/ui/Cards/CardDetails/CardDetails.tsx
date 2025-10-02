import { useTheme } from "@/theme";
import { View } from "react-native";
import { createCardDetailsStyles } from "./CardDetails.styles";
import { CardDetailsProps } from "./CardDetails.types";

export const CardDetails = ({ children }: CardDetailsProps) => {
  const { theme } = useTheme();
  const styles = createCardDetailsStyles(theme);
  return (
    <View style={styles.selectedCard}>
      <View style={styles.cardContainer}>{children}</View>
    </View>
  );
};
