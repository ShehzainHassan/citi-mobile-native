import { Images } from '@/assets/images';
import {
  BaseModal,
  Button,
  ChooseTransfer,
  Header,
  ImageWithFallback,
  Input,
} from '@/components';
import {
  KEYBOARD_TYPE_MAP,
  MODAL_OPTIONS_MAP,
  TRANSFER_FIELDS,
  TRANSFER_OPTIONS,
  TransferType,
} from '@/config';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export const AddNewBeneficiary = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

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

  const handleOpenModal = (placeholder: string) => {
    const options = MODAL_OPTIONS_MAP[placeholder] || [];
    setModalOptions(options);
    setCurrentInput(placeholder);
    setModalVisible(true);
  };

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

    const index = TRANSFER_OPTIONS.findIndex(o => o.key === transfer);

    // 👇 auto-scroll logic
    if (scrollRef.current) {
      if (index === 0) {
        // scroll to start
        scrollRef.current.scrollTo({ x: 0, animated: true });
      } else if (index === TRANSFER_OPTIONS.length - 1) {
        // scroll to end
        scrollRef.current.scrollToEnd({ animated: true });
      }
    }
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
      console.log('Image pick cancelled or failed:', error);
    }
  };

  return (
    <ScrollView style={globalStyles.verticalSpread}>
      <Header title="Add new" />
      <View style={globalStyles.paddedColumn}>
        <View style={styles.imgWrapper}>
          <View style={styles.imgContainer}>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={styles.profilePic}
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
            {selectedValues['Enter name'] || ''}
          </Text>
        </View>

        <View style={styles.scrollWrapper}>
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {TRANSFER_OPTIONS.map(option => (
              <ChooseTransfer
                key={option.key}
                image={option.image}
                text={option.text}
                variant="secondary"
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

            return (
              <Input
                key={index}
                placeholder={input.placeholder}
                editable={input.editable}
                value={inputValue}
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
                onPressIn={
                  isDropdown
                    ? () => handleOpenModal(input.placeholder)
                    : undefined
                }
                onChangeText={
                  input.editable
                    ? text =>
                        setSelectedValues(prev => ({
                          ...prev,
                          [input.placeholder]: text,
                        }))
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
              })
            }
          />
        </View>
      </View>

      <BaseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        header={`Select ${currentInput}`}
        contents={modalOptions}
        selectedItem={selectedValues[currentInput] || ''}
        onSelect={handleSelect}
        alignCenter
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

  scrollWrapper: { maxHeight: 120, paddingVertical: 8, marginHorizontal: -16 },
  scrollContainer: { gap: 16, paddingHorizontal: 16, alignItems: 'center' },
  button: { marginTop: 8 },
  inputContainer: { paddingHorizontal: 16, paddingVertical: 24 },
  profilePic: { width: 120, height: 120, borderRadius: 60 },
});
