import { Pressable, Platform } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';
import type { ComponentProps, ReactNode } from 'react';
import { useToast } from '@/hooks';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Pressable>, 'onPress'>;

export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  const { error: showError } = useToast();
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
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Unable to open link';
      console.warn('Error opening link:', err);
      showError('Link Error', message);
    }
  }

  return (
    <Pressable onPress={handlePress} {...rest}>
      {children}
    </Pressable>
  );
}
