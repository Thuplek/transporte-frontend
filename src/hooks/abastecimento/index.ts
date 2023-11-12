import { AbastecimentoService } from '../../services/abastecimentos/abastecimentoService';
import AbastecimentoStore from '../../strores/abastecimento';

export function useAbastecimento() {
  const getAll = async () => {
    const { setLsAbastecimento } = AbastecimentoStore.getState();
    const { data } = await AbastecimentoService.getAll();
    setLsAbastecimento(data);
  };
  return {
    getAll,
  };
}
