import { useQuery } from '@tanstack/react-query';
import EnderecoService from '@services/endereco/enderecoService';
import AuthStore from '@stores/auth';

export const useGetAllEndereco = () => {
  const { token } = AuthStore.getState();

  const query = useQuery({
    queryKey: ['getAllEndereco'],
    queryFn: EnderecoService.getAll,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;
};
