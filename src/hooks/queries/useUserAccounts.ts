import { userAPI } from '@/api/userAPI';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/hooks/queries';

export const useUserAccounts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USER.ACCOUNTS,
    queryFn: () => userAPI.getUserAccounts(),
  });
};
