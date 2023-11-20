import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';

interface IEndereco {
  data: [];
}

const getAll = async (): Promise<IEndereco | Error> => {
  try {
    const { data } = await API.get('/endereco');
    if (data) {
      return data;
    }
    return new Error(MENSAGENS.ERRO_AO_BUSCAR_DADOS);
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const EnderecoService = {
  getAll,
};
export default EnderecoService;
