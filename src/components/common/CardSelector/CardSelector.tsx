import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Input } from '@/components';
import { BaseModal } from '@/components/ui/Modal';
import { useTheme } from '@/theme';
import { cards } from '@/mocks';
import { formatCards } from '@/utils';
import { CardSelectorProps } from './CardSelector.types';
import { createCardSelectorStyles } from './CardSelector.styles';
import { useGlobalStyles } from '@/hooks';

export const CardSelector = ({
  label,
  value,
  onChange,
  showBalance = false,
}: CardSelectorProps) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const [isModalVisible, setModalVisible] = useState(false);
  const styles = createCardSelectorStyles(theme);
  const handleSelectCard = (code: string) => {
    onChange?.(code);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <Input
          label={label}
          placeholder="Choose account / card"
          value={value || ''}
          readOnly
          onRightPress={() => setModalVisible(true)}
          rightIcon={
            <MaterialIcons
              name="expand-more"
              size={24}
              color={theme.colors.neutral4}
            />
          }
          showRightBorder={false}
        />
      </TouchableOpacity>

      {showBalance && value && (
        <Text style={[styles.balance, globalStyles.primary1]}>
          Available balance: 10,000$
        </Text>
      )}

      <BaseModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        header="Choose account"
        contents={formatCards(cards)}
        selectedItem={value}
        onSelect={handleSelectCard}
        alignCenter
      />
    </View>
  );
};
