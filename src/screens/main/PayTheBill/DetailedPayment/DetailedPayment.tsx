import { DetailedPaymentCard, Header } from '@/components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainTabParamList } from '@/navigation/types';
import { View } from 'react-native';
import { useGlobalStyles } from '@/hooks';

export const DetailedPayment = () => {
  const globalStyles = useGlobalStyles();
  const { params } =
    useRoute<RouteProp<MainTabParamList, 'DetailedPaymentCard'>>();
  const headerText = params?.headerText ?? 'Payment';
  const paymentData = params?.paymentData;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title={headerText} />
      <View style={globalStyles.paddedColumn}>
        {paymentData && <DetailedPaymentCard paymentData={paymentData} />}
      </View>
    </View>
  );
};
