import React, { useState } from 'react';
import { Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { OptimizedImageProps } from './OptimizedImage.types';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  source,
  fallback,
  style,
  resizeMode = 'cover',
  priority = 'normal',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const isLocal = typeof source === 'number';
  const finalSource = hasError && fallback ? fallback : source;

  if (isLocal) {
    return (
      <Image
        source={finalSource}
        style={style}
        onError={_e => setHasError(true)}
        {...props}
      />
    );
  }

  const remoteUri =
    typeof finalSource === 'object' &&
    finalSource !== null &&
    'uri' in finalSource
      ? finalSource.uri
      : undefined;

  if (!remoteUri) return null;

  return (
    <FastImage
      source={{
        uri: remoteUri,
        priority: FastImage.priority[priority],
      }}
      resizeMode={FastImage.resizeMode[resizeMode]}
      style={style}
      onError={() => setHasError(true)}
    />
  );
};
