import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import { ImageBackground, Text, View, useWindowDimensions } from "react-native";
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
  const globalStyles = useGlobalStyles();
  const { width } = useWindowDimensions();
  const styles = createCreditCardStyles(theme, width);

  const isSmallScreen = width < 360;

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {Array.from({ length: 4 }).map((_, index) => (
        <View key={index} style={styles.dot} />
      ))}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={backgroundImage}
        style={[styles.container, style]}
        imageStyle={[
          imageStyle,
          {
            resizeMode: "stretch",
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Text
            style={
              isSmallScreen
                ? [globalStyles.heading2, globalStyles.neutral6]
                : globalStyles.heading1
            }
          >
            {name}
          </Text>
          <View style={styles.subContainer}>
            <Text style={globalStyles.sublineMedium14}>{cardType}</Text>
            <View style={styles.cardNumberContainer}>
              <Text
                style={isSmallScreen ? globalStyles.body3 : globalStyles.body2}
              >
                {cardNumber.slice(0, 4)}
              </Text>
              {renderDots()}
              {renderDots()}
              <Text
                style={isSmallScreen ? globalStyles.body3 : globalStyles.body2}
              >
                {cardNumber.slice(-4)}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            isSmallScreen ? globalStyles.title3 : globalStyles.title2,
            styles.amount,
          ]}
        >
          {amount}
        </Text>
      </ImageBackground>
    </View>
  );
};
