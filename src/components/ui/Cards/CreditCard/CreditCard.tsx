import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { ImageBackground, Text, View } from "react-native";
import { createCreditCardStyles } from "./CreditCard.styles";
import { CreditCardProps } from "./CreditCard.types";

export const CreditCard: React.FC<CreditCardProps> = ({
  name,
  cardType,
  cardNumber,
  amount,
  backgroundImage,
  style,
  imageStyle,
}) => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const styles = createCreditCardStyles(theme);

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {Array.from({ length: 4 }).map((_, index) => (
        <View key={index} style={styles.dot} />
      ))}
    </View>
  );

  return (
    <ImageBackground
      source={backgroundImage}
      style={[styles.container, style]}
      imageStyle={imageStyle}>
      <View style={styles.titleContainer}>
        <Text style={globalStyles.heading1}>{name}</Text>
        <View style={styles.subContainer}>
          <Text style={globalStyles.sublineMedium14}>{cardType}</Text>
          <View style={styles.cardNumberContainer}>
            <Text style={globalStyles.body2}>{cardNumber.slice(0, 4)}</Text>
            {renderDots()}
            {renderDots()}
            <Text style={globalStyles.body2}>{cardNumber.slice(-4)}</Text>
          </View>
        </View>
      </View>
      <Text style={[globalStyles.title2, styles.amount]}>{amount}</Text>
    </ImageBackground>
  );
};
