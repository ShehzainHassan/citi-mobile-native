export interface BeneficiaryDirectoryProps {
  title?: string;
  subtitle?: string;
  selectedBeneficiary: string | null;
  onSelect: (name: string | null) => void;
}
