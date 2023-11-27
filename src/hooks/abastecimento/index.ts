import AuthStore from '@stores/auth';
import { AbastecimentoService } from '../../services/abastecimentos/abastecimentoService';
import AbastecimentoStore from '../../stores/abastecimento';
import { useMutation } from '@tanstack/react-query';

export function useAbastecimento() {
  const getAll = async () => {
    const { setLsAbastecimento } = AbastecimentoStore.getState();
    const data  = await AbastecimentoService.getAll();
    console.log("🚀 ~ getAll ~ data=>", data)
    setLsAbastecimento(data);
  };

  return {
    getAll,
  };
}
export function useCreateAbastecimento() {
  const { token } = AuthStore.getState();

  const query = useMutation({
    // queryKey: ['createAbastecimento'],
    mutationFn: AbastecimentoService.create,
    meta: { headers: { authorization: `Bearer ${token}` } },
  });
  return query;
}
