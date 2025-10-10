import { ImageWithFallback } from '@/components/common';
import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createTransactionRowCardStyles } from './InfoRowCard.styles';
import { InfoRowCardProps } from './InfoRowCard.types';

export const InfoRowCard: React.FC<InfoRowCardProps> = ({
  label,
  title,
  subtitle,
  amount,
  icon,
  style,
  amountStyle,
  onPress,
  iconBackgroundColor,
  centeredItems = false,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createTransactionRowCardStyles(theme);

  const CardContent = (
    <View
      style={[
        styles.cardContainer,
        centeredItems ? { alignItems: 'center' } : undefined,
      ]}
    >
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.iconImgContainer,
            iconBackgroundColor
              ? { backgroundColor: iconBackgroundColor }
              : undefined,
          ]}
        >
          <ImageWithFallback source={icon} style={styles.iconImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[globalStyles.body1, globalStyles.neutral1]}>
            {title}
          </Text>
          {typeof subtitle === 'string' && subtitle.trim() !== '' && (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                globalStyles.caption1,
                globalStyles.neutral3,
                styles.subTitle,
              ]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      <Text style={[globalStyles.title3, styles.amountText, amountStyle]}>
        {amount}
      </Text>
    </View>
  );

  if (label) {
    return (
      <View style={[styles.container, style]}>
        <Text style={[globalStyles.caption1, styles.dayText]}>{label}</Text>
        {CardContent}
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, style]}>
      {CardContent}
    </TouchableOpacity>
  );
};
