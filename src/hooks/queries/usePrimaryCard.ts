import { userAPI } from '@/api/userAPI';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/hooks/queries';

export const usePrimaryCard = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USER.PRIMARY_CARD,
    queryFn: () => userAPI.getPrimaryCard(),
  });
};
