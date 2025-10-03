import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { createSearchScreenCardStyles } from "./SearchScreenCard.styles";
import { SearchScreenCardProps } from "./SearchScreenCard.types";

export const SearchScreenCard: React.FC<SearchScreenCardProps> = ({
  title,
  subtitle,
  imageSource,
  onPress,
}) => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const styles = createSearchScreenCardStyles(theme);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[globalStyles.title3, globalStyles.neutral1]}>
            {title}
          </Text>
          <Text style={globalStyles.caption2}>{subtitle}</Text>
        </View>
        <Image source={imageSource} style={styles.img} />
      </View>
    </TouchableOpacity>
  );
};
