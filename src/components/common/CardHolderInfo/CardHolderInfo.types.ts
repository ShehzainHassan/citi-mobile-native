import { ImageSourcePropType } from 'react-native';

export type CardHolderInfoItem = {
  profilePic: ImageSourcePropType;
  name: string;
  cardNumber: string;
};

export type CardHolderInfoProps = {
  data: CardHolderInfoItem[];
};
