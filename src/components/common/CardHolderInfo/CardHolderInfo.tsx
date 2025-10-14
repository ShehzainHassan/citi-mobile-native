import { useGlobalStyles } from '@/hooks';
import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { ImageWithFallback } from '../ImageWithFallback';
import { createCardHolderInfoStyles } from './CardHolderInfo.styles';
import { CardHolderInfoProps } from './CardHolderInfo.types';

export const CardHolderInfo = ({ data }: CardHolderInfoProps) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createCardHolderInfoStyles(theme);
  return (
    <View style={[globalStyles.cardContainer, styles.container]}>
      {data.map((item, index) => {
        const isLast = index === data.length - 1;
        return (
          <View
            key={index}
            style={[styles.subContainer, !isLast && styles.subContainerBorder]}
          >
            <ImageWithFallback
              source={item.profilePic}
              style={styles.profilePic}
            />
            <View>
              <Text style={[globalStyles.body1, globalStyles.neutral1]}>
                {item.name}
              </Text>
              <Text style={[globalStyles.caption1, globalStyles.neutral3]}>
                {item.cardNumber}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
