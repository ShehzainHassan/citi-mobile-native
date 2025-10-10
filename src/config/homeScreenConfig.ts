import { Images } from '@/assets/images';
import { TranslationKeys } from '@/i18n';
import { MainTabParamList } from '@/navigation/types';
import { ImageSourcePropType } from 'react-native';

export interface HomeCardConfig {
  id: string;
  image: ImageSourcePropType;
  labelKey: string;
  route?: keyof MainTabParamList;
  enabled?: boolean;
}

export const HOME_CARD_GRID: HomeCardConfig[][] = [
  [
    {
      id: 'accounts',
      image: Images.accountAndCard,
      labelKey: TranslationKeys.homeScreen.accountAndCard,
      route: 'Accounts',
    },
    {
      id: 'transfer',
      image: Images.transfer,
      labelKey: TranslationKeys.homeScreen.transfer,
    },
    {
      id: 'withdraw',
      image: Images.withdraw,
      labelKey: TranslationKeys.homeScreen.withdraw,
      route: 'Withdraw',
    },
  ],
  [
    {
      id: 'prepaid',
      image: Images.prepaid,
      labelKey: TranslationKeys.homeScreen.mobilePrepaid,
    },
    {
      id: 'bill',
      image: Images.bill,
      labelKey: TranslationKeys.homeScreen.payBill,
      route: 'PayBill',
    },
    {
      id: 'saveOnline',
      image: Images.saveOnline,
      labelKey: TranslationKeys.homeScreen.saveOnline,
    },
  ],
  [
    {
      id: 'creditCard',
      image: Images.creditCard,
      labelKey: TranslationKeys.homeScreen.creditCard,
      route: 'CreditCard',
    },
    {
      id: 'transactionReport',
      image: Images.transactionReport,
      labelKey: TranslationKeys.homeScreen.transactionReport,
      route: 'TransactionReport',
    },
    {
      id: 'beneficiary',
      image: Images.beneficiary,
      labelKey: TranslationKeys.homeScreen.beneficiary,
    },
  ],
];
