import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { ISecretaria } from '@app/interfaces/secretaria';

const getAll = async (): Promise<ISecretaria[]> => {
  try {
    const { data } = await API.get<ISecretaria[]>('/secretaria');
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
export const SecretariaService = {
  getAll,
};
export default SecretariaService;
