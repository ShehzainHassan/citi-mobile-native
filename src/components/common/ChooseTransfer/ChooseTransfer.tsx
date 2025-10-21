import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { OptimizedImage } from '../OptimizedImage';
import { createTransferStyles } from './ChooseTransfer.styles';
import { ChooseTransferProps } from './ChooseTransfer.types';

export const ChooseTransfer = ({
  image,
  text,
  variant = 'primary',
  selected = false,
  onSelect,
}: ChooseTransferProps) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createTransferStyles(theme, variant, selected);

  const renderImage = () => {
    if (typeof image === 'function') {
      const SvgIcon = image;
      return <SvgIcon width={28} height={28} />;
    }

    return <OptimizedImage source={image} resizeMode="contain" />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onSelect}
      activeOpacity={0.8}
    >
      {renderImage()}
      <Text style={[globalStyles.caption2, globalStyles.neutral6]}>{text}</Text>
    </TouchableOpacity>
  );
};
