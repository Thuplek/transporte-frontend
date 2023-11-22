import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { IMotorista } from '@app/interfaces/motorista';

const getAll = async (): Promise<IMotorista[]> => {
  try {
    const { data } = await API.get('/motorista');
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
