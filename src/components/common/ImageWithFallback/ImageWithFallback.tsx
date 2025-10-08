import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View
} from "react-native";
import { ContentFit, FallbackImageProps, ImageSource } from "./ImageWithFallback.types";

const contentFitToResizeMode = (contentFit?: ContentFit): 'cover' | 'contain' | 'stretch' | 'repeat' | 'center' => {
  switch (contentFit) {
    case 'contain':
      return 'contain';
    case 'cover':
      return 'cover';
    case 'fill':
      return 'stretch';
    case 'scale-down':
      return 'contain';
    case 'none':
      return 'center';
    default:
      return 'cover';
  }
};

const normalizeSource = (source: ImageSource): ImageSourcePropType => {
  if (typeof source === "number") {
    return source;
  } else if (typeof source === "string") {
    return { uri: source };
  } else if (Array.isArray(source)) {
    return source[0] || { uri: '' };
  } else if (typeof source === 'function') {
    return { uri: '' };
  } else {
    return source as ImageSourcePropType;
  }
};

export const ImageWithFallback: React.FC<FallbackImageProps> = ({
  source,
  fallbackSource,
  style,
  resizeMode,
  contentFit,
  transition = 200,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const isComponent = typeof source === 'function';
  
  const imageSource = error && fallbackSource ? fallbackSource : source;
  
  const finalResizeMode = resizeMode || contentFitToResizeMode(contentFit);

  if (isComponent) {
    const SvgComponent = imageSource as React.ComponentType<any>;
    return (
      <View style={style}>
        <SvgComponent width="100%" height="100%" {...props} />
      </View>
    );
  }

  const normalizedSource = normalizeSource(imageSource);

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

  return (
    <View style={style}>
      {loading && !error && <ActivityIndicator style={StyleSheet.absoluteFill} />}
      <Animated.Image
        source={normalizedSource}
        style={[
          StyleSheet.absoluteFill,
          transition && Platform.OS !== 'web' ? { opacity: fadeAnim } : undefined
        ]}
        resizeMode={finalResizeMode}
        onLoadStart={() => {
          setLoading(true);
          setError(false);
          if (transition && Platform.OS !== 'web') {
            fadeAnim.setValue(0);
          }
        }}
        onLoadEnd={handleLoadEnd}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        {...props}
      />
    </View>
  );
};
