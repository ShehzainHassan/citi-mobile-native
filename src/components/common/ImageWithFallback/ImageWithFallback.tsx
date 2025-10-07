import { Image } from "expo-image";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { FallbackImageProps } from "./ImageWithFallback.types";

export const ImageWithFallback: React.FC<FallbackImageProps> = ({
  source,
  style,
  ...props
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={style}>
      {loading && <ActivityIndicator style={StyleSheet.absoluteFill} />}
      <Image
        source={source}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        transition={200}
        cachePolicy="memory-disk"
        contentFit="cover"
        {...props}
      />
    </View>
  );
};
