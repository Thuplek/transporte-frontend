import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { ILubrificante } from '@app/interfaces/lubrificante';

const getAll = async (): Promise<ILubrificante[]> => {
  try {
    const { data } = await API.get('/lubrificante');
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
