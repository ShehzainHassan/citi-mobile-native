import React, { ComponentType, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { ImageWithFallbackProps } from './ImageWithFallback.types';

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  source,
  fallbackSource,
  style,
  contentFit = 'cover',
  transition = 200,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const isSvgElement = React.isValidElement(source);
  const isSvgComponent = typeof source === 'function';

  const finalResizeMode =
    contentFit === 'contain'
      ? 'contain'
      : contentFit === 'fill'
      ? 'stretch'
      : contentFit === 'none'
      ? 'center'
      : 'cover';

  const handleLoadEnd = () => {
    setLoading(false);
    if (transition && Platform.OS !== 'web') {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: transition,
        useNativeDriver: true,
      }).start();
    }
  };

  if (isSvgElement) return <View style={style}>{source}</View>;

  if (isSvgComponent) {
    const SvgComponent = source as ComponentType<SvgProps>;
    return (
      <View style={[style, styles.container]}>
        <SvgComponent width={24} height={24} />
      </View>
    );
  }

  const imageSource =
    error && fallbackSource ? fallbackSource : (source as ImageSourcePropType);

  return (
    <View style={[style, styles.container]}>
      {loading && !error && (
        <ActivityIndicator style={StyleSheet.absoluteFill} />
      )}
      <Animated.Image
        source={imageSource}
        style={[
          style,
          transition && Platform.OS !== 'web'
            ? { opacity: fadeAnim }
            : undefined,
        ]}
        resizeMode={finalResizeMode}
        onLoadStart={() => {
          setLoading(true);
          setError(false);
          if (transition && Platform.OS !== 'web') fadeAnim.setValue(0);
        }}
        onLoadEnd={handleLoadEnd}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
