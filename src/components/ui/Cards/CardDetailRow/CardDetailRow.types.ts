import { ReactNode } from "react";

export interface CardDetailRowProps {
  label: string | ReactNode;
  value: string | ReactNode;
  labelStyle?: object;
  valueStyle?: object;
  onPress?: () => void;
}
