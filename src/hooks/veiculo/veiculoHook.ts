import { useQuery } from '@tanstack/react-query';
import { VeiculoService } from '../../services/veiculo/veiculoService';
import AuthStore from '@stores/auth';

export const useGetAllVeiculos = () => {
  const { token } = AuthStore.getState();

  const query = useQuery({
    queryKey: ['getAllVeiculos'],
    queryFn: VeiculoService.getAll,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;

  //   setLsVeiculos(data?.data);
};

