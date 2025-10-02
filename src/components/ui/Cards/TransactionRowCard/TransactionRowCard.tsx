import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import { Image, Text, View } from "react-native";
import { createTransactionRowCardStyles } from "./TransactionRowCard.styles";
import { TransactionRowCardProps } from "./TransactionRowCard.types";

export const TransactionRowCard: React.FC<TransactionRowCardProps> = ({
  day,
  title,
  subtitle,
  price,
  icon,
}) => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const styles = createTransactionRowCardStyles(theme);
  const isNegative = String(price).trim().startsWith("-");
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.caption1, styles.dayText]}>{day}</Text>
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.iconImgContainer}>
            <Image source={icon} style={styles.iconImg} />
          </View>
          <View>
            <Text style={[globalStyles.body1, styles.title]}>{title}</Text>
            {typeof subtitle === "string" && subtitle.trim() !== "" && (
              <Text style={[globalStyles.caption1, styles.subTitle]}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        <Text style={[globalStyles.title3, isNegative && styles.negative]}>
          {price}
        </Text>
      </View>
    </View>
  );
};
