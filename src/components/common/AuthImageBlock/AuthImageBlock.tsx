import { useGlobalStyles } from '@/hooks';
import { OptimizedImage } from '../OptimizedImage';
import { AuthImageBlockProps } from './AuthImageBlock.types';
import { View } from 'react-native';

export const AuthImageBlock = ({ source }: AuthImageBlockProps) => {
  const imageSource = typeof source === 'string' ? { uri: source } : source;
  const globalStyles = useGlobalStyles();
  return (
    <View style={globalStyles.authLogoContainer}>
      <OptimizedImage
        source={imageSource}
        style={globalStyles.authLogo}
        resizeMode="contain"
      />
    </View>
  );
};
