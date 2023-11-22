import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { ICombustivel } from '@app/interfaces/combustivel';

const getAll = async (): Promise<ICombustivel[]> => {
  try {
    const { data } = await API.get('/combustivel');
    if (data) {
      return data;
    }
    new Error(MENSAGENS.ERRO_AO_BUSCAR_DADOS);
    return [];
  } catch (error) {
    console.error(error);
    new Error();
    return [];
  }
};
export const CombustivelService = {
  getAll,
};
export default CombustivelService;
