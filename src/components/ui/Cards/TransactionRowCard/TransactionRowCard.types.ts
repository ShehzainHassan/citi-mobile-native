import { ImageSourcePropType } from "react-native";

export interface TransactionRowCardProps {
  day: string;
  title: string;
  subtitle?: string;
  price: string;
  icon: ImageSourcePropType;
}
