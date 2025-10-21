import { Images } from '@/assets/images';
import {
  BiometricAuthView,
  Button,
  Header,
  Input,
  OtpInput,
  SuccessScreen,
} from '@/components';
import { useDeviceAuthType, useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ConfimMobilePrepaid = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { params } =
    useRoute<RouteProp<MainTabParamList, 'MobilePrepaidConfirm'>>();

  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [showBiometricView, setShowBiometricView] = useState(false);
  const [otp, setOtp] = useState('');
  const authType = useDeviceAuthType();

  const handleConfirm = () => {
    if (!otp) return;
    if (authType === 'NONE') {
      setShowSuccessScreen(true);
    } else {
      setShowBiometricView(true);
    }
  };

  if (showSuccessScreen)
    return (
      <SuccessScreen
        onBack={() => navigation.goBack()}
        source={Images.withdrawBanner}
        title="Payment success!"
        subtitle="You have successfully paid mobile prepaid"
        btnText="Confirm"
        onPress={() => navigation.navigate('Home')}
      />
    );

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <Header title="Confirm" onPress={() => navigation.goBack()} />
      <View style={[globalStyles.paddedColumn, styles.container]}>
        <View style={globalStyles.largeSpacedColumn}>
          <Input label="From" value={params.fromCard} readOnly />
          <Input label="To" value={params.toPhone} readOnly />
          <Input label="Amount" value={params.amount} readOnly />

          {!showBiometricView && <OtpInput otp={otp} onChangeOtp={setOtp} />}

          {showBiometricView && (
            <BiometricAuthView
              authType={authType}
              onSuccess={() => setShowSuccessScreen(true)}
            />
          )}
        </View>

        {!showBiometricView && (
          <Button title="Confirm" onPress={handleConfirm} disabled={!otp} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
