import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';

interface ISecretaria {
  data: [];
}

const getAll = async (): Promise<ISecretaria | Error> => {
  try {
    const { data } = await API.get('/secretaria');
    if (data) {
      return data;
    }
    return new Error(MENSAGENS.ERRO_AO_BUSCAR_DADOS);
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const SecretariaService = {
  getAll,
};
export default SecretariaService;
