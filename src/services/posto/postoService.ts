import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { IPosto } from '@app/interfaces/posto';

const getAll = async (): Promise<IPosto[]> => {
  try {
    const { data } = await API.get<IPosto[]>('/posto');
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
export const LubrificanteService = {
  getAll,
};
export default LubrificanteService;
