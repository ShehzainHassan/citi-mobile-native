export interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  header?: string;
  contents?: string[];
  heightRatio?: number;
  selectedItem?: string | null;
  onSelect?: (item: string) => void;
  alignCenter?: boolean;
}
