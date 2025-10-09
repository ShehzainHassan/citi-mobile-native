import { useTheme } from "@/theme";
import { Text, View } from "react-native";
import { createMessageStyles } from "./Message.styles";
import { MessageProps } from "./Message.types";

export const Message = ({ messageType }: MessageProps) => {
  const { theme } = useTheme();
  const styles = createMessageStyles(theme);

  const isSender = messageType === "sender";

  return (
    <View
      style={[styles.wrapper, isSender ? styles.alignLeft : styles.alignRight]}
    >
      <View
        style={[styles.message, isSender ? styles.sender : styles.receiver]}
      >
        <Text style={isSender ? styles.senderText : styles.receiverText}>
          Did you attempt transaction on debit card ending in 0000 at Mechan1 in
          NJ for $1,200? Reply YES or NO
        </Text>
      </View>
    </View>
  );
};
