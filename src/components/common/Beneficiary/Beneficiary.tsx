import { Images } from '@/assets/images';
import { useGlobalStyles } from '@/hooks';
import { StyleSheet, Text, View } from 'react-native';
import { ImageWithFallback } from '../ImageWithFallback';
import { BeneficiaryProps } from './Beneficiary.types';

export const Beneficiary = ({
  isNew,
  image,
  name,
  selected,
  onPress,
}: BeneficiaryProps) => {
  const globalStyles = useGlobalStyles();
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
            <ImageWithFallback
              source={Images.addBeneficiary}
              style={styles.addBeneficiary}
            />
          </View>
        ) : image ? (
          <View style={styles.profilePicContainer}>
            <ImageWithFallback source={image} style={styles.profilePic} />
            <Text style={selected ? styles.selectedText : undefined}>
              {name}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  addBeneficiary: {
    width: 24,
    height: 24,
  },
  profilePic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  profilePicContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 120,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F1F9',
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  selectedContainer: {
    backgroundColor: '#3629B7',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  touchable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
