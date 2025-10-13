import { DetailedPaymentCard, Header } from '@/components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  MainTabParamList,
  MainTabWithSearchParamList,
} from '@/navigation/types';
import { View } from 'react-native';
import { useGlobalStyles } from '@/hooks';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const DetailedPayment = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();

  const { params } =
    useRoute<RouteProp<MainTabParamList, 'DetailedPaymentCard'>>();
  const headerText = params?.headerText ?? 'Payment';
  const paymentData = params?.paymentData;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title={headerText} onPress={() => navigation.goBack()} />
      <View style={globalStyles.paddedColumn}>
        {paymentData && <DetailedPaymentCard paymentData={paymentData} />}
      </View>
    </View>
  );
};
