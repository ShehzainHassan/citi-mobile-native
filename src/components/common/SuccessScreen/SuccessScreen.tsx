import { Button, Header, OptimizedImage } from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import React from 'react';
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
      <View style={[globalStyles.paddedColumn]}>
        <OptimizedImage source={source} style={globalStyles.successImage} />
        <View style={authStyles.changePasswordContainer}>
          <Text style={globalStyles.title3}>{title}</Text>
          {typeof subtitle === 'string' ? (
            <Text
              style={[
                globalStyles.body3,
                globalStyles.neutral1,
                globalStyles.centerText,
              ]}
            >
              {subtitle}
            </Text>
          ) : (
            subtitle
          )}
        </View>
        <Button title={btnText} onPress={onPress} />
      </View>
    </View>
  );
};
