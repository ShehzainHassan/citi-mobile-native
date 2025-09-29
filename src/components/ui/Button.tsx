// Example themed button component
// Shows how to use theme context instead of importing lightTheme directly

import { useTheme } from '@/theme/ThemeProvider';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary' 
}) => {
  // Use theme context
  // Don't import lightTheme directly
  const { theme } = useTheme();
  
  const buttonStyle = [
    styles.button,
    {
      backgroundColor: variant === 'primary' 
        ? theme.colors.primary 
        : theme.colors.background,
      borderColor: theme.colors.primary,
    }
  ];

  const textStyle = [
    styles.text,
    {
      color: variant === 'primary' 
        ? '#FFFFFF' 
        : theme.colors.primary,
      fontSize: theme.typography.fontSize.base,
    }
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
});
