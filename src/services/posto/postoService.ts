import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';

interface Iposto {
  data: [];
}

const getAll = async (): Promise<Iposto | Error> => {
  try {
    const { data } = await API.get('/posto');
    if (data) {
      return data;
    }
    return new Error(MENSAGENS.ERRO_AO_BUSCAR_DADOS);
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const LubrificanteService = {
  getAll,
};
export default LubrificanteService;
