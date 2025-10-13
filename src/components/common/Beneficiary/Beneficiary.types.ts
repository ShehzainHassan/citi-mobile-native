import { ImageSourcePropType } from 'react-native';

export type BeneficiaryProps = {
  isNew?: boolean;
  image?: ImageSourcePropType;
  name?: string;
  selected?: boolean;
  onPress?: () => void;
};
