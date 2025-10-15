import React, { useState, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useGlobalStyles } from '@/hooks';
import { createBankModalStyles } from './BankModal.styles';
import { BankModalProps } from './BankModal.types';
import { useTheme } from '@/theme';

export const BankModal: React.FC<BankModalProps> = ({
  title,
  visible,
  onClose,
  banks,
  selectedBank,
  onSelect,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createBankModalStyles(theme);
  const [search, setSearch] = useState('');

  const filteredBanks = useMemo(
    () =>
      banks.filter(bank =>
        bank.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [banks, search],
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={styles.header}>
                <Text
                  style={[
                    globalStyles.title3,
                    globalStyles.neutral1,
                    styles.headerText,
                  ]}
                >
                  {title}
                </Text>
                <TouchableOpacity onPress={onClose}>
                  <MaterialIcons name="close" size={20} />
                </TouchableOpacity>
              </View>

              <View style={styles.searchContainer}>
                <MaterialIcons
                  name="search"
                  size={18}
                  color={theme.colors.neutral3}
                />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={theme.colors.neutral3}
                  style={styles.searchInput}
                  value={search}
                  onChangeText={setSearch}
                />
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollArea}
              >
                {filteredBanks.map(bank => {
                  const isSelected = bank === selectedBank;
                  return (
                    <TouchableOpacity
                      key={bank}
                      style={styles.bankRow}
                      onPress={() => onSelect(bank)}
                    >
                      <Text
                        style={[
                          globalStyles.body1,
                          globalStyles.neutral3,
                          isSelected && [
                            globalStyles.title3,
                            globalStyles.neutral1,
                          ],
                        ]}
                      >
                        {bank}
                      </Text>
                      {isSelected && (
                        <MaterialIcons
                          name="check"
                          size={18}
                          color={theme.colors.primary1}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
