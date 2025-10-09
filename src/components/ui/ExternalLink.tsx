import { Link } from "@react-navigation/native";
import InAppBrowser from "react-native-inappbrowser-reborn";
import { Linking, Platform } from "react-native";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  async function handlePress(event: any) {
    if (Platform.OS !== "web") {
      event.preventDefault();

      try {
        if (await InAppBrowser.isAvailable()) {
          await InAppBrowser.open(href, {
            // For iOS
            dismissButtonStyle: "close",
            preferredBarTintColor: "#fff",
            preferredControlTintColor: "#000",
            readerMode: false,
            // For options
            showTitle: true,
            enableUrlBarHiding: true,
            enableDefaultShare: true,
          });
        } else {
          // fallback to system browser in case of web
          await Linking.openURL(href);
        }
      } catch (error) {
        console.warn("Error opening link:", error);
      }
    }
  }

  return <Link target="_blank" {...rest} href={href as any} onPress={handlePress} />;
}
