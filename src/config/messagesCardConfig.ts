import { Images } from '@/assets/images';
import { Theme } from '@/theme';
import { ImageSourcePropType } from 'react-native';

import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface MessageCardConfig {
  id: string;
  icon: ImageSourcePropType | FC<SvgProps>;
  title: string;
  subtitle: string;
  amount: string;
  route: string;
  iconColorKey: keyof Theme['colors'];
}

export const MESSAGES_CARD_CONFIG: MessageCardConfig[] = [
  {
    id: 'citibank',
    icon: Images.citiBank,
    title: 'Citibank',
    subtitle: 'Citibank: 256486 is the authorization',
    amount: 'Today',
    route: 'Citibank',
    iconColorKey: 'primary1',
  },
  {
    id: 'account',
    icon: Images.account,
    title: 'Account',
    subtitle: 'Your account is limited. Please follow',
    amount: '12/10',
    route: 'Account',
    iconColorKey: 'semantic1',
  },
  {
    id: 'alert',
    icon: Images.alert,
    title: 'Alert',
    subtitle: 'Your statement is ready for you to',
    amount: '11/10',
    route: 'Alert',
    iconColorKey: 'semantic2',
  },
  {
    id: 'paypal',
    icon: Images.paypal,
    title: 'Paypal',
    subtitle: 'Your account has been locked. Please',
    amount: '10/11',
    route: 'Paypal',
    iconColorKey: 'semantic3',
  },
  {
    id: 'withdraw',
    icon: Images.withdrawIcon,
    title: 'Withdraw',
    subtitle: 'Dear customer, 2987456 is your code',
    amount: '10/12',
    route: 'Withdraw',
    iconColorKey: 'semantic4',
  },
];