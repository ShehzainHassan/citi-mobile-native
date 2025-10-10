import { Input } from '@/components';
import { BaseModal } from '@/components/ui/Modal';
import { useGlobalStyles } from '@/hooks';
import { cardsNumbers } from '@/mocks';
import { useTheme } from '@/theme';
import { formatCards } from '@/utils';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createCardSelectorStyles } from './CardSelectorModal.styles';
import { CardSelectorProps } from './CardSelectorModal.types';

export const CardSelectorModal = ({
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
        contents={formatCards(cardsNumbers)}
        selectedItem={value}
        onSelect={handleSelectCard}
        alignCenter
      />
    </View>
  );
};
