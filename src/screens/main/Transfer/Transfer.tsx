import {
  BankModal,
  BeneficiaryDirectory,
  Button,
  CardSelectorModal,
  Checkbox,
  ChooseTransfer,
  Header,
  Input,
} from '@/components';
import {
  getKeyboardType,
  getTransferInputs,
  isDropdownField,
  TRANSFER_OPTIONS,
  TRANSFER_TYPES,
  TransferType,
} from '@/config';
import { useAppSelector, useGlobalStyles } from '@/hooks';
import { beneficiaryData } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { useTheme } from '@/theme';
import { currencySymbolsMap, handleModalOpen, handleScroll } from '@/utils';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Transfer = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const [selectedTransfer, setSelectedTransfer] =
    useState<TransferType>('card');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOptions, setModalOptions] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<string | null>(
    null,
  );

  const scrollRef = useRef<ScrollView>(null);

  const handleTransferSelect = (transfer: TransferType) => {
    setSelectedTransfer(transfer);
    setSelectedValues({});
    setSelectedBeneficiary(null);
    handleScroll(transfer, scrollRef, TRANSFER_TYPES as unknown as string[]);
  };

  const handleOpenModal = (placeholder: string) =>
    handleModalOpen(
      placeholder,
      setModalOptions,
      setCurrentInput,
      setModalVisible,
    );

  const handleSelect = (value: string) => {
    setSelectedValues(prev => ({ ...prev, [currentInput]: value }));
    setModalVisible(false);
  };

  const allRequiredFilled = () =>
    getTransferInputs(selectedTransfer).every(
      input => !!selectedValues[input.placeholder],
    );

  useEffect(() => {
    if (selectedBeneficiary) {
      const found = beneficiaryData.find(b => b.name === selectedBeneficiary);
      if (found) {
        setSelectedValues(prev => ({
          ...prev,
          Name: found.name,
          'Card number': found.cardNo,
        }));
      }
    } else {
      setSelectedValues(prev => ({
        ...prev,
        Name: '',
        'Card number': '',
      }));
    }
  }, [selectedBeneficiary]);

  const isBeneficiarySelected = selectedBeneficiary !== null;

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={globalStyles.scrollContentSecondary}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        extraScrollHeight={Platform.OS === 'ios' ? 80 : 0}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Transfer" onPress={() => navigation.goBack()} />
        <View
          style={[globalStyles.paddedColumn, globalStyles.largeSpacedColumn]}
        >
          <CardSelectorModal
            value={selectedCard}
            onChange={setSelectedCard}
            showBalance={true}
          />

          <View style={styles.transactionContainer}>
            <Text style={[globalStyles.caption1, globalStyles.textDefault]}>
              Choose transaction
            </Text>

            <View style={[globalStyles.scrollWrapper]}>
              <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={globalStyles.scrollContainer}
              >
                {TRANSFER_OPTIONS.map(option => (
                  <ChooseTransfer
                    key={option.key}
                    image={option.image}
                    text={option.text}
                    variant={option.variant}
                    selected={selectedTransfer === option.key}
                    onSelect={() => handleTransferSelect(option.key)}
                  />
                ))}
              </ScrollView>
            </View>

            <BeneficiaryDirectory
              title="Choose beneficiary"
              subtitle="Find beneficiary"
              selectedBeneficiary={selectedBeneficiary}
              onSelect={setSelectedBeneficiary}
            />
          </View>

          <View
            style={[
              globalStyles.cardContainer,
              globalStyles.largeSpacedColumn,
              styles.inputContainer,
            ]}
          >
            {getTransferInputs(selectedTransfer).map((input, index) => {
              const isDropdown = isDropdownField(input.placeholder);
              const inputValue = selectedValues[input.placeholder] || '';
              const keyboardType = getKeyboardType(input.placeholder);
              const isLocked =
                isBeneficiarySelected &&
                (input.placeholder === 'Name' ||
                  input.placeholder === 'Card number');

              const isAmountField = input.placeholder === 'Amount';

              return (
                <Input
                  key={index}
                  placeholder={input.placeholder}
                  readOnly={isLocked}
                  value={
                    isAmountField ? selectedValues.Amount ?? '' : inputValue
                  }
                  keyboardType={keyboardType}
                  rightIcon={
                    isDropdown ? (
                      <MaterialIcons
                        name="unfold-more"
                        size={20}
                        color={theme.colors.neutral2}
                      />
                    ) : undefined
                  }
                  editable={!isDropdown && input.editable}
                  showSoftInputOnFocus={!isDropdown}
                  onPressIn={
                    isDropdown
                      ? () => handleOpenModal(input.placeholder)
                      : undefined
                  }
                  onChangeText={
                    !isDropdown && !isLocked && input.editable
                      ? text => {
                          if (isAmountField) {
                            const numericPart = text.replace(/[^0-9]/g, '');
                            setSelectedValues(prev => ({
                              ...prev,
                              Amount: `${symbol} ${numericPart}`,
                            }));
                          } else {
                            setSelectedValues(prev => ({
                              ...prev,
                              [input.placeholder]: text,
                            }));
                          }
                        }
                      : undefined
                  }
                />
              );
            })}

            <Checkbox label="Save to the directory of beneficiary" />

            <Button
              title="Confirm"
              disabled={!allRequiredFilled() || !selectedCard}
              onPress={() =>
                navigation.navigate('ConfirmTransfers', {
                  transferData: {
                    ...selectedValues,
                    fromCard: selectedCard,
                    transactionFee: '$10',
                  },
                  transferType: selectedTransfer,
                })
              }
            />
          </View>
        </View>

        <BankModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          title={
            currentInput === 'Choose bank'
              ? 'Choose beneficiary bank'
              : currentInput === 'Choose branch'
              ? 'Choose beneficiary branch'
              : undefined
          }
          banks={modalOptions}
          selectedBank={selectedValues[currentInput] || ''}
          onSelect={handleSelect}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: { paddingHorizontal: 16, paddingVertical: 24 },
  transactionContainer: { gap: 16 },
});
