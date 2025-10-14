import React from 'react';
import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import { Text, TouchableOpacity } from 'react-native';
import { ImageWithFallback } from '../ImageWithFallback';
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

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onSelect}
      activeOpacity={0.8}
    >
      <ImageWithFallback source={image} svgWidth={28} svgHeight={28} />
      <Text style={[globalStyles.caption2, globalStyles.neutral6]}>{text}</Text>
    </TouchableOpacity>
  );
};
