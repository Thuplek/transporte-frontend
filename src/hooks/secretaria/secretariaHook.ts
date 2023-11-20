import { useQuery } from '@tanstack/react-query';
import SecretariaService from '@services/secretaria/secretariaService';
import AuthStore from '@stores/auth';

export const useGetAllSecretaria = () => {
  const { token } = AuthStore.getState();

  const query = useQuery({
    queryKey: ['getAllSecretaria'],
    queryFn: SecretariaService.getAll,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;
};
