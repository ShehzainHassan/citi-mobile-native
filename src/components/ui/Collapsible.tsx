import React, { PropsWithChildren, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { IconSymbol } from "@/components/ui/icons/IconSymbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface CollapsibleProps extends PropsWithChildren, TouchableOpacityProps {
  title: string;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  title,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <TouchableOpacity
        style={[styles.heading, style]}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
        {...props}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>

      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
