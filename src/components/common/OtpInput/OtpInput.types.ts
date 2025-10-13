export interface OtpInputRowProps {
  otp: string;
  onChangeOtp: (value: string) => void;
  disabled?: boolean;
  onGetOtp?: () => void;
}