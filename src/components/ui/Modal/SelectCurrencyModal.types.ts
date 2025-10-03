export interface SelectCurrencyModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (code: string) => void;
  selected: string;
}
