import { APIError } from '@/types';

export interface ErrorMessageProps {
  error: APIError | Error;
  onRetry?: () => void;
}
