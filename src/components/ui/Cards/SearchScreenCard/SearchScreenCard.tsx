import { OptimizedImage } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { createSearchScreenCardStyles } from './SearchScreenCard.styles';
import { SearchScreenCardProps } from './SearchScreenCard.types';

export const SearchScreenCard: React.FC<SearchScreenCardProps> = ({
  title,
  subtitle,
  imageSource,
  onPress,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createSearchScreenCardStyles(theme);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: theme.colors.neutral5 },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={[globalStyles.title3, globalStyles.neutral1]}>
          {title}
        </Text>
        <Text style={globalStyles.caption2}>{subtitle}</Text>
      </View>
      <OptimizedImage source={imageSource} style={styles.img} />
    </Pressable>
  );
};
