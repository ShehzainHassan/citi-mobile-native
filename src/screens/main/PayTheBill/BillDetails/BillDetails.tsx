import { Images } from '@/assets/images';
import {
  Button,
  CardSelectorModal,
  DetailedPaymentCard,
  Header,
  ImageWithFallback,
  OtpInput,
  SuccessScreen,
} from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RouteProp, useRoute } from '@react-navigation/native';

export const BillDetails = () => {
  const globalStyles = useGlobalStyles();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [otp, setOtp] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();
  const { params } =
    useRoute<RouteProp<MainTabWithSearchParamList, 'BillDetails'>>();

  const { billType, paymentData } = params;

  if (showSuccessScreen)
    return (
      <SuccessScreen
        onBack={() => navigation.goBack()}
        headerText={`${billType} bill`}
        source={Images.withdrawBanner}
        title="Transaction successfully!"
        subtitle={`You have paid your ${billType.toLowerCase()} bill!`}
        btnText="Confirm"
        onPress={() => navigation.navigate('Home')}
      />
    );

  return (
    <ScrollView style={globalStyles.verticalSpread}>
      <Header title={`${billType} bill`} onPress={() => navigation.goBack()} />
      <View style={globalStyles.paddedColumn}>
        <ImageWithFallback
          source={Images.withdrawBanner}
          style={globalStyles.imgLogo}
        />
        <Text
          style={[
            globalStyles.centerText,
            globalStyles.caption2,
            globalStyles.neutral3,
            globalStyles.marginVerticalMd,
          ]}
        >
          {paymentData.from} - {paymentData.to}
        </Text>
        <View style={styles.container}>
          <DetailedPaymentCard
            title={`${billType} Bill`}
            paymentData={paymentData}
          />
          <View style={globalStyles.largeSpacedColumn}>
            <CardSelectorModal
              value={selectedCard}
              onChange={setSelectedCard}
              showBalance={true}
            />
            <View style={styles.subContainer}>
              <OtpInput
                otp={otp}
                onChangeOtp={setOtp}
                disabled={!selectedCard}
              />
              <Button
                disabled={!otp || !selectedCard}
                title="Pay the bill"
                onPress={() => setShowSuccessScreen(true)}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  subContainer: {
    gap: 40,
  },
});
