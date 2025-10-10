import { Images } from '@/assets/images';
import { Bill, CreditCard, Header } from '@/components';
import { useGlobalStyles, useTransactionReportStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

export const CreditCardScreen = () => {
  const globalStyles = useGlobalStyles();
  const transactionReportStyles = useTransactionReportStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <View style={transactionReportStyles.container}>
      <Header
        title="Credit Card"
        variant="secondary"
        onPress={() => navigation.navigate('Home')}
        style={styles.header}
      />
      <View style={globalStyles.roundedContainer}>
        <CreditCard
          name="John Smith"
          cardType="Amazon Platinium"
          cardNumber="475612349018"
          amount="$3.469.52"
          backgroundImage={Images.cards}
          onPress={() => navigation.navigate('CreditCardDetails')}
        />
        <Bill />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 24,
  },
});
