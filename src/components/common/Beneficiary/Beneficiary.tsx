import { Images } from '@/assets/images';
import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { OptimizedImage } from '../OptimizedImage';
import { createBeneficiaryStyles } from './Beneficiary.styles';
import { BeneficiaryProps } from './Beneficiary.types';

export const Beneficiary = ({
  isNew,
  image,
  name,
  selected,
  onPress,
}: BeneficiaryProps) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createBeneficiaryStyles(theme);
  return (
    <View
      style={[
        globalStyles.cardContainer,
        styles.container,
        !isNew && selected && styles.selectedContainer,
      ]}
    >
      <View style={styles.touchable} onTouchEnd={onPress}>
        {isNew ? (
          <View style={styles.imageContainer}>
            <Images.addBeneficiary style={styles.addBeneficiary} />
          </View>
        ) : image ? (
          <View style={styles.profilePicContainer}>
            <OptimizedImage source={image} style={styles.profilePic} />
            <Text style={selected ? styles.selectedText : undefined}>
              {name}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
