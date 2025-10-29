export interface VerifyOTPRequest {
  email: string;
  phoneNo?: string;
  code: string;
}

export interface ResendOTPRequest {
  email: string;
  phoneNo?: string;
}
