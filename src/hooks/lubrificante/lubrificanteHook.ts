import { useQuery } from '@tanstack/react-query';
import LubrificanteService from '@services/lubrificante/lubrificanteService';
import AuthStore from '@stores/auth';

export const useGetAllLubrificante = () => {
  const { token } = AuthStore.getState();

  const query = useQuery({
    queryKey: ['getAllLubrificante'],
    queryFn: LubrificanteService.getAll,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;
};
