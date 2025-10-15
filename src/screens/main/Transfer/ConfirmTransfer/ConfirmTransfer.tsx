import { Images } from '@/assets/images';
import {
  BiometricAuthView,
  Button,
  Header,
  Input,
  OtpInput,
  SuccessScreen,
} from '@/components';
import { getTransferInputs, TransferType } from '@/config';
import { useDeviceAuthType, useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export const ConfirmTransfer = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const route = useRoute<RouteProp<MainTabParamList, 'ConfirmTransfers'>>();
  const { transferData, transferType } = route.params;
  const [otp, setOtp] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [showBiometricView, setShowBiometricView] = useState(false);
  const authType = useDeviceAuthType();

  const inputs = getTransferInputs(transferType as TransferType);

  const handleConfirm = () => {
    if (!otp) return;
    if (authType === 'NONE') {
      setShowSuccessScreen(true);
    } else {
      setShowBiometricView(true);
    }
  };

  const recipientName =
    transferData.Name || transferData.Beneficiary || 'Recipient';
  const transferAmount =
    transferData.Amount || transferData['Transfer amount'] || '$—';

  if (showSuccessScreen)
    return (
      <SuccessScreen
        onBack={() => navigation.goBack()}
        source={Images.withdrawBanner}
        title="Transfer successful!"
        subtitle={
          <Text>
            You have successfully transferred{' '}
            <Text style={globalStyles.semantic1}>${transferAmount}</Text> to{' '}
            <Text style={globalStyles.primary1}>{recipientName}</Text>.
          </Text>
        }
        btnText="Confirm"
        onPress={() => navigation.navigate('Home')}
      />
    );

  return (
    <ScrollView style={globalStyles.verticalSpread}>
      <Header title="Confirm" onPress={() => navigation.goBack()} />

      <View style={globalStyles.paddedColumn}>
        <Text style={[globalStyles.caption1, globalStyles.neutral3]}>
          Confirm transaction information
        </Text>

        <View style={globalStyles.largeSpacedColumn}>
          <Input label="From" value={transferData.fromCard || ''} readOnly />

          {inputs.map((input, index) => (
            <Input
              key={index}
              label={input.placeholder}
              value={transferData[input.placeholder] || ''}
              readOnly
            />
          ))}

          <Input
            label="Transaction fee"
            value={transferData.transactionFee || '$10'}
            readOnly
          />

          {!showBiometricView && <OtpInput otp={otp} onChangeOtp={setOtp} />}

          {showBiometricView && (
            <BiometricAuthView
              authType={authType}
              onSuccess={() => setShowSuccessScreen(true)}
            />
          )}

          <Button
            title="Confirm"
            style={globalStyles.marginVerticalMd}
            disabled={!otp}
            onPress={handleConfirm}
          />
        </View>
      </View>
    </ScrollView>
  );
};
