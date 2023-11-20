import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';

interface ICombustivel {
  data: [];
}

const getAll = async (): Promise<ICombustivel | Error> => {
  try {
    const { data } = await API.get('/combustivel');
    if (data) {
      return data;
    }
    return new Error(MENSAGENS.ERRO_AO_BUSCAR_DADOS);
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const CombustivelService = {
  getAll,
};
export default CombustivelService;
