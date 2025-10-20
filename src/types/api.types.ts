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
export interface APIError<
  Details = unknown,
  Context = Record<string, unknown>,
> {
  code:
    | 'NETWORK_ERROR'
    | 'TIMEOUT'
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'NOT_FOUND'
    | 'SERVER_ERROR'
    | 'VALIDATION_ERROR'
    | 'UNKNOWN_ERROR'
    | string;

  message: string;

  status?: number;

  details?: Details;

  timestamp?: string;

  context?: Context & {
    endpoint?: string;
    method?: string;
    requestId?: string;
  };
}
