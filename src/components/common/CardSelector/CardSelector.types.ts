export interface CardSelectorProps {
  label?: string;
  value?: string | null;
  onChange?: (value: string) => void;
  showBalance?: boolean;
}
