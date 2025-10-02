import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { Text, TouchableOpacity, View } from "react-native";
import { createAuthFooterStyles } from "./AuthFooter.styles";
import { AuthFooterProps } from "./AuthFooter.types";

export const AuthFooter: React.FC<AuthFooterProps> = ({
  label,
  actionText,
  onActionPress,
}) => {
  const { globalStyles } = useStyles();
  const { theme } = useTheme();
  const styles = createAuthFooterStyles(theme);
  return (
    <View style={[styles.footerContainer]}>
      <Text style={globalStyles.caption2}>{label}</Text>
      {onActionPress ? (
        <TouchableOpacity onPress={onActionPress}>
          <Text style={globalStyles.caption1}>{actionText}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={globalStyles.caption1}>{actionText}</Text>
      )}
    </View>
  );
};
