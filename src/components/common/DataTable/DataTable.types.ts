import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface DataTableProps {
  columns: string[];
  rows: (ReactNode | string | number)[][];
  containerStyle?: ViewStyle;
  headerStyle?: TextStyle;
  cellStyle?: TextStyle;
  highlightColumnIndex?: number;
  highlightStyle?: TextStyle;
}
