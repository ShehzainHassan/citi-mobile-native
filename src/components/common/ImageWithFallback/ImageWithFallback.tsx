import { Image, ImageSource } from "expo-image";
import React, { useState } from "react";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";
import { styles } from "./ImageWithFallback.styles";
import { FallbackImageProps } from "./ImageWithFallback.types";

export const ImageWithFallback: React.FC<FallbackImageProps> = ({
  source,
  style,
  ...props
}) => {
  const [loading, setLoading] = useState(true);

  let normalizedSource: ImageSource | number | ImageSource[] | string;
  if (typeof source === "number") {
    normalizedSource = source;
  } else if (typeof source === "string") {
    normalizedSource = { uri: source } as ImageSource;
  } else if (Array.isArray(source)) {
    normalizedSource = source as ImageSource[];
  } else {
    normalizedSource = source as ImageSource;
  }

  return (
    <View style={[styles.container, style]}>
      {loading && <ActivityIndicator style={StyleSheet.absoluteFill} />}
      <Image
        source={normalizedSource}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        contentFit="contain"
        {...(Platform.OS !== "web" && {
          transition: 200,
          cachePolicy: "memory-disk",
        })}
        {...props}
      />
    </View>
  );
};
