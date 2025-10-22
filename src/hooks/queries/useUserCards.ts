import { userAPI } from '@/api/userAPI';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/hooks/queries';

export const useUserCards = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USER.ALL_CARDS,
    queryFn: () => userAPI.getUserCards(),
  });
};
