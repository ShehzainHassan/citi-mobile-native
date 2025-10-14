import { Images } from '@/assets/images';
import {
  Button,
  Header,
  ImageWithFallback,
  Input,
  OtpInput,
  SuccessScreen,
} from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Platform } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  enableBioMetric,
  checkBiometricSupport,
  checkNewFingerPrintAdded,
} from 'react-native-biometric-check';

export const ConfimMobilePrepaid = () => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { params } =
    useRoute<RouteProp<MainTabParamList, 'MobilePrepaidConfirm'>>();

  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [showBiometricView, setShowBiometricView] = useState(false);
  const [otp, setOtp] = useState('');

  const handleBiometricAuth = async () => {
    try {
      checkNewFingerPrintAdded(res => {
        if (res === 'NEW_FINGERPRINT_ADDED') {
          Alert.alert('Security Alert', 'New fingerprint added to device.');
        }
      });

      if (Platform.OS === 'ios') {
        enableBioMetric(
          'Use Face ID / Touch ID',
          'Authenticate to confirm transaction',
          res => {
            switch (res) {
              case 1:
                Alert.alert('Error', 'Biometric not available on this device');
                break;
              case 2:
                Alert.alert('Locked', 'Too many failed attempts');
                break;
              case 3:
                Alert.alert('Error', 'No biometrics enrolled');
                break;
              case 4:
                Alert.alert('Error', 'Unknown biometric status');
                break;
              case 5:
                setShowSuccessScreen(true);
                break;
              default:
                Alert.alert('Error', `Unknown response: ${res}`);
            }
          },
        );
        return;
      }

      checkBiometricSupport(res => {
        if (res === 'SUCCESS') {
          enableBioMetric(
            'Biometric',
            'Enter phone screen lock pattern, PIN, password or fingerprint',
            result => {
              if (result === 'AUTHENTICATION_SUCCESS' || result === 5) {
                setShowSuccessScreen(true);
              } else {
                Alert.alert('Authentication Failed', `${result}`);
              }
            },
          );
        } else {
          Alert.alert('Biometric Not Supported', res);
        }
      });
    } catch (error) {
      Alert.alert('Error', 'Biometric authentication failed.');
    }
  };

  const handleConfirm = async () => {
    if (!otp) return;
    setShowSuccessScreen(true);
    // if (!showBiometricView) {
    //   setShowBiometricView(true);
    // } else {
    //   await handleBiometricAuth();
    // }
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
    <View style={globalStyles.verticalSpread}>
      <Header title="Confirm" onPress={() => navigation.goBack()} />
      <View style={[globalStyles.paddedColumn, styles.container]}>
        <View style={globalStyles.largeSpacedColumn}>
          <Input label="From" value={params.fromCard} readOnly />
          <Input label="To" value={params.toPhone} readOnly />
          <Input label="Amount" value={params.amount} readOnly />
          {!showBiometricView && <OtpInput otp={otp} onChangeOtp={setOtp} />}

          {/* {showBiometricView && (
            <>
              <Text>Use Touch ID or Face ID to verify transaction</Text>
              <View style={[globalStyles.centerContainer, styles.biometric]}>
                <ImageWithFallback
                  source={Images.fingerprint}
                  style={authStyles.biometricButton}
                />
              </View>
            </>
          )} */}
        </View>

        <Button title="Confirm" onPress={handleConfirm} disabled={!otp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  biometric: {
    marginTop: -24,
  },
});
