import { Pressable, Platform } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';
import type { ComponentProps, ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Pressable>, 'onPress'>;

export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  async function handlePress() {
    try {
      if (Platform.OS !== 'web' && (await InAppBrowser.isAvailable())) {
        await InAppBrowser.open(href, {
          dismissButtonStyle: 'close',
          preferredBarTintColor: '#fff',
          preferredControlTintColor: '#000',
          readerMode: false,
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: true,
        });
      } else {
        await Linking.openURL(href);
      }
    } catch (error) {
      console.warn('Error opening link:', error);
    }
  }

  return (
    <Pressable onPress={handlePress} {...rest}>
      {children}
    </Pressable>
  );
}
