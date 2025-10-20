export interface BiometricAuthViewProps {
  authType: 'NONE' | 'DEVICE' | 'BIOMETRIC';
  onSuccess: () => void;
  showText?: boolean;
}
