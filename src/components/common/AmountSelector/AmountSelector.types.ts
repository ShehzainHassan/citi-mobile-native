export type AmountSelectorProps = {
  amounts: string[];
  selectedAmount: string | null;
  customAmount: string;
  onAmountPress: (amt: string) => void;
  onCustomAmountChange: (text: string) => void;
};
