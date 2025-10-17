import { useTheme } from '@/theme';
import { Text, View } from 'react-native';
import { createMessageStyles } from './Message.styles';
import { MessageProps } from './Message.types';

export const Message = ({ message, messageType }: MessageProps) => {
  const { theme } = useTheme();
  const styles = createMessageStyles(theme);

  const isSender = messageType === 'sender';

  return (
    <View
      style={[styles.wrapper, isSender ? styles.alignLeft : styles.alignRight]}
    >
      <View
        style={[styles.message, isSender ? styles.sender : styles.receiver]}
      >
        <Text style={isSender ? styles.senderText : styles.receiverText}>
          {message}
        </Text>
      </View>
    </View>
  );
};
