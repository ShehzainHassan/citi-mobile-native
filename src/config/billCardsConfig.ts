import { Images } from '@/assets/images';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { ImageSourcePropType } from 'react-native';

type BillCardConfig<Route extends keyof MainTabWithSearchParamList> = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  route?: Route;
  params?: MainTabWithSearchParamList[Route];
};

export const BILL_CARDS_CONFIG: BillCardConfig<
  keyof MainTabWithSearchParamList
>[] = [
  {
    title: 'Electric bill',
    subtitle: 'Pay electric bill this month',
    route: 'PaymentDetails',
    image: Images.branch,
    params: { billType: 'Electric' },
  },
  {
    title: 'Water bill',
    subtitle: 'Pay water bill this month',
    route: 'PaymentDetails',
    image: Images.interestRate,
    params: { billType: 'Water' },
  },
  {
    title: 'Mobile bill',
    subtitle: 'Pay mobile bill this month',
    route: 'PaymentDetails',
    image: Images.exchangeRate,
    params: { billType: 'Mobile' },
  },
  {
    title: 'Internet bill',
    subtitle: 'Pay internet bill this month',
    image: Images.exchange,
    route: 'PaymentDetails',
    params: { billType: 'Internet' },
  },
  {
    title: 'Payment History',
    subtitle: 'View your payment history',
    image: Images.branch,
    route: 'PaymentHistory',
  },
];
