export interface BiometricAuthViewProps {
  authType: 'NONE' | 'DEVICE' | 'BIOMETRIC';
  onSuccess: () => void;
}
