import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { IEndereco } from '@app/interfaces/endereco';

const getAll = async (): Promise<IEndereco[]> => {
  try {
    const { data } = await API.get('/endereco');
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
export const EnderecoService = {
  getAll,
};
export default EnderecoService;
