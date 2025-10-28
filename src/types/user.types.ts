export interface SignUpRequest {
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  acceptTerms: boolean;
  referralCode?: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}
