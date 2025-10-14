import { useTheme } from '@/theme';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon } from '../../ui';
import { createHeaderStyles } from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = ({
  title,
  variant = 'primary',
  onPress,
  style,
  rightIcon,
  onRightPress,
}: HeaderProps) => {
  const { theme } = useTheme();
  const styles = createHeaderStyles(theme, variant);
  const textColor =
    variant === 'primary' ? theme.colors.neutral1 : theme.colors.neutral6;

  return (
    <SafeAreaView edges={['top']} style={[styles.safeAreaContainer, style]}>
      <View style={styles.headerContainer}>
        <View style={styles.leftGroup}>
          {onPress ? (
            <TouchableOpacity
              onPress={onPress}
              style={styles.backButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <BackIcon color={textColor} width={9} height={16} />
            </TouchableOpacity>
          ) : (
            <View style={styles.backButton}>
              <BackIcon color={textColor} width={9} height={16} />
            </View>
          )}
          <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
        </View>

        {rightIcon ? (
          <TouchableOpacity
            onPress={onRightPress}
            style={styles.rightButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {rightIcon}
          </TouchableOpacity>
        ) : (
          <View style={styles.rightButton} />
        )}
      </View>
    </SafeAreaView>
  );
};
