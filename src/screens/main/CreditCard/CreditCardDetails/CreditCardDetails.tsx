import { Images } from '@/assets/images';
import {
  Bill,
  Button,
  CardSelectorModal,
  Header,
  OtpInput,
  SuccessScreen,
} from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CreditCardDetails = () => {
  const globalStyles = useGlobalStyles();
  const [selectedCard, setSelectedCard] = useState('');
  const [otp, setOTP] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  if (showSuccess) {
    return (
      <SuccessScreen
        source={Images.withdrawBanner}
        title="Transaction successful"
        subtitle="You have successfully traded"
        btnText="Confirm"
        onPress={() => navigation.navigate('Home')}
      />
    );
  }

  return (
    <SafeAreaView
      style={[globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <Header
        title="Credit card"
        onPress={() => navigation.navigate('CreditCard')}
      />
      <View
        style={[
          globalStyles.paddedColumn,
          globalStyles.largeSpacedColumn,
          globalStyles.noVerticalPadding,
        ]}
      >
        <Bill />
        <View style={globalStyles.largeSpacedColumn}>
          <CardSelectorModal value={selectedCard} onChange={setSelectedCard} />
          <OtpInput otp={otp} onChangeOtp={setOTP} disabled={!selectedCard} />
        </View>
      </View>
      <Button
        title="Pay"
        style={{ margin: 24 }}
        disabled={!otp || !selectedCard}
        onPress={() => setShowSuccess(true)}
      />
    </SafeAreaView>
  );
};
