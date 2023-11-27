import { useMutation, useQuery } from '@tanstack/react-query';
import { CombustivelService } from '../../services/combustivel/combustivelService';
import {} from '@tanstack/react-query';
import AuthStore from '@stores/auth';

export const useGetAllCombustivel = () => {
  const { token } = AuthStore.getState();

  const query = useQuery({
    queryKey: ['getAllCombustivel'],
    queryFn: CombustivelService.getAll,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;

  //   setLsVeiculos(data?.data);
};

export function useUpdateCombustivel() {
  const { token } = AuthStore.getState();

  const query = useMutation({
    // queryKey: ['createAbastecimento'],
    mutationFn: CombustivelService.update,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;
}
