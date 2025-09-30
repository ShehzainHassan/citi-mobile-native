import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../../../theme';
import { createButtonStyles } from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  disabled = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createButtonStyles(theme);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text
        style={[
          styles.text,
          variant === 'secondary' && styles.textSecondary,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
