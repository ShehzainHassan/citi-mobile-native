export interface Currency {
  code: string;
  name: string;
}

export interface SelectCurrencyHeaderProps {
  onClose: () => void;
}

export interface SelectCurrencyListProps {
  selected: string;
  onSelect: (code: string) => void;
  onClose: () => void;
}
