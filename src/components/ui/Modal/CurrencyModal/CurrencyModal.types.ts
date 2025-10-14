export interface CurrencyModalProps {
  visible: boolean;
  selectedCurrency: string;
  onClose: () => void;
  onSelect: (label: string) => void;
}
