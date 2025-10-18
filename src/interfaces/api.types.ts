export interface CurrencyAPIResponse {
  success: boolean;
  symbols: Record<string, string>;
  error?: {
    code: number;
    info: string;
  };
}
export interface ConversionRateAPIResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
  error?: {
    code: number;
    info: string;
  };
}
