import { useTheme } from "@/theme";
import { Text, TouchableOpacity, View } from "react-native";
import { BackIcon } from "../../ui";
import { createHeaderStyles } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export const Header = ({
  title,
  variant = "primary",
  onPress,
  style,
}: HeaderProps) => {
  const { theme } = useTheme();
  const styles = createHeaderStyles(theme);
  const textColor =
    variant === "primary" ? theme.colors.neutral1 : theme.colors.neutral6;
  const titleStyle = [styles.header, { color: textColor }];

  return (
    <View style={[styles.headerContainer, style]}>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <BackIcon color={textColor} width={9} height={16} />
        </TouchableOpacity>
      ) : (
        <BackIcon color={textColor} width={9} height={16} />
      )}
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
};
