import { useQuery } from '@tanstack/react-query';
import PostoService from '@services/posto/postoService';
import AuthStore from '@stores/auth';

export const useGetAllPosto = () => {
  const { token } = AuthStore.getState();

  const query = useQuery({
    queryKey: ['getAllPosto'],
    queryFn: PostoService.getAll,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;
};
