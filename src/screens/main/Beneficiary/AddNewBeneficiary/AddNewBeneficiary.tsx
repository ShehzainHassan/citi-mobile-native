import { Images } from '@/assets/images';
import {
  BankModal,
  Button,
  ChooseTransfer,
  Header,
  ImageWithFallback,
  Input,
} from '@/components';
import {
  KEYBOARD_TYPE_MAP,
  TRANSFER_FIELDS,
  TRANSFER_OPTIONS,
  TransferType,
} from '@/config';
import { useAppSelector, useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { useTheme } from '@/theme';
import { currencySymbolsMap, handleModalOpen, handleScroll } from '@/utils';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export const AddNewBeneficiary = () => {
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
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollRef = useRef<ScrollView>(null);

  const getInputs = () => TRANSFER_FIELDS[selectedTransfer];

  const handleSelect = (value: string) => {
    setSelectedValues(prev => ({ ...prev, [currentInput]: value }));
    setModalVisible(false);
  };

  const allRequiredFilled = () => {
    const allInputsFilled = getInputs().every(
      input => !!selectedValues[input.placeholder],
    );
    return allInputsFilled && !!selectedImage;
  };

  const handleTransferSelect = (transfer: TransferType) => {
    setSelectedTransfer(transfer);
    setSelectedValues({});
    handleScroll(
      transfer,
      scrollRef,
      TRANSFER_OPTIONS.map(o => o.key),
    );
  };

  const handleImagePick = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo',
      });
      setSelectedImage(image.path);
    } catch (error) {
      console.error('Image pick cancelled or failed:', error);
    }
  };

  return (
    <ScrollView style={globalStyles.verticalSpread}>
      <Header title="Add new" onPress={() => navigation.goBack()} />

      <View style={globalStyles.paddedColumn}>
        <View style={styles.imgWrapper}>
          <View style={styles.imgContainer}>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={globalStyles.profilePic}
              />
            ) : (
              <ImageWithFallback
                source={Images.guest}
                svgWidth={54}
                svgHeight={54}
              />
            )}

            <TouchableOpacity
              style={styles.addButton}
              onPress={handleImagePick}
            >
              <MaterialIcons
                name={selectedImage ? 'edit' : 'add'}
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <Text style={[globalStyles.title3, globalStyles.primary1]}>
            {selectedValues.Name || ''}
          </Text>
        </View>

        <View style={globalStyles.scrollWrapper}>
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

        <View
          style={[
            globalStyles.cardContainer,
            globalStyles.largeSpacedColumn,
            styles.inputContainer,
          ]}
        >
          {getInputs().map((input, index) => {
            const isDropdown =
              input.placeholder === 'Choose branch' ||
              input.placeholder === 'Choose bank';
            const inputValue = selectedValues[input.placeholder] || '';
            const keyboardType =
              KEYBOARD_TYPE_MAP[input.placeholder] || 'default';

            const isAmountField = input.placeholder === 'Amount';

            return (
              <Input
                key={index}
                placeholder={input.placeholder}
                value={isAmountField ? selectedValues.Amount ?? '' : inputValue}
                keyboardType={keyboardType}
                editable={!isDropdown && input.editable}
                showSoftInputOnFocus={!isDropdown}
                rightIcon={
                  isDropdown ? (
                    <MaterialIcons
                      name="unfold-more"
                      size={20}
                      color={theme.colors.neutral2}
                    />
                  ) : undefined
                }
                onPressIn={
                  isDropdown
                    ? () =>
                        handleModalOpen(
                          input.placeholder,
                          setModalOptions,
                          setCurrentInput,
                          setModalVisible,
                        )
                    : undefined
                }
                onChangeText={
                  !isDropdown && input.editable
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

          <Button
            title="Save to directory"
            style={styles.button}
            disabled={!allRequiredFilled()}
            onPress={() =>
              navigation.navigate('ConfirmBeneficiary', {
                beneficiaryData: selectedValues,
                image: selectedImage,
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  imgContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#F2F1F9',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  addButton: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    backgroundColor: '#3629B7',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },

  button: { marginTop: 8 },
  inputContainer: { paddingHorizontal: 16, paddingVertical: 24 },
});
