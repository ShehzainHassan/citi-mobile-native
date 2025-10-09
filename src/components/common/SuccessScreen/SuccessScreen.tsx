import { Button, Header, ImageWithFallback } from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { Text, View } from 'react-native';
import { SuccessScreenProps } from './SuccessScreen.types';

export const SuccessScreen = ({
  headerText,
  onBack,
  title,
  subtitle,
  source,
  btnText,
  onPress,
}: SuccessScreenProps) => {
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  return (
    <View style={globalStyles.verticalSpread}>
      {headerText && <Header title={headerText} onPress={onBack} />}
      <View style={globalStyles.paddedColumn}>
        <ImageWithFallback
          source={source}
          style={globalStyles.authLogo}
          resizeMode="contain"
        />
        <View style={authStyles.changePasswordContainer}>
          <Text style={globalStyles.title3}>{title}</Text>
          <Text style={[globalStyles.body3, globalStyles.neutral1]}>
            {subtitle}
          </Text>
        </View>
        <Button title={btnText} onPress={onPress} />
      </View>
    </View>
  );
};
