import React, { ComponentType, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageSourcePropType,
  Platform,
  Pressable,
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
  svgWidth = 24,
  svgHeight = 24,
  onPress,
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

  const Container = onPress ? Pressable : View;

  if (isSvgElement)
    return (
      <Container style={style} onPress={onPress}>
        {source}
      </Container>
    );

  if (isSvgComponent) {
    const SvgComponent = source as ComponentType<SvgProps>;
    return (
      <Container style={[style, styles.container]} onPress={onPress}>
        <SvgComponent width={svgWidth} height={svgHeight} />
      </Container>
    );
  }

  const imageSource =
    error && fallbackSource ? fallbackSource : (source as ImageSourcePropType);

  return (
    <Container style={[style, styles.container]} onPress={onPress}>
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
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
