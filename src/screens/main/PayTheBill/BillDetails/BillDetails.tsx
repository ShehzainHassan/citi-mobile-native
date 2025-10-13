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
import { internetPayment } from '@/mocks';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const BillDetails = () => {
  const globalStyles = useGlobalStyles();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [otp, setOtp] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();

  if (showSuccessScreen)
    return (
      <SuccessScreen
        onBack={() => navigation.goBack()}
        headerText="Internet bill"
        source={Images.withdrawBanner}
        title="Transaction successfully!"
        subtitle="You have payed your internet bill!"
        btnText="Confim"
        onPress={() => navigation.navigate('Home')}
      />
    );
  return (
    <ScrollView style={globalStyles.verticalSpread}>
      <Header title="Internet bill" onPress={() => navigation.goBack()} />
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
          {internetPayment[0].from} - {internetPayment[0].to}
        </Text>
        <View style={styles.container}>
          <DetailedPaymentCard
            title="All the Bills"
            paymentData={internetPayment[0]}
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
