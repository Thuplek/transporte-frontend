import { useMutation, useQuery } from '@tanstack/react-query';
import   MotoristaService  from '@services/motorista/motoristaService';
import {} from '@tanstack/react-query';
import AuthStore from '@stores/auth';

export const useGetAllMotorista = () => {
  const { token } = AuthStore.getState();

  const query = useQuery({
    queryKey: ['getAllMotorista'],
    queryFn: MotoristaService.getAll,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;

  //   setLsVeiculos(data?.data);
};

export function useCreateMotorista() {
  const { token } = AuthStore.getState();

  const query = useMutation({
    // queryKey: ['createAbastecimento'],
    mutationFn: MotoristaService.create,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;
}

