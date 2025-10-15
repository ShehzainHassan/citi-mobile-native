export interface BankModalProps {
  title: string | undefined;
  visible: boolean;
  onClose: () => void;
  banks: string[];
  selectedBank?: string;
  onSelect: (bank: string) => void;
}
