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
const create = async (data: any): Promise<IMotorista[]> => {
  try {
    const response = await API.post('/motorista', data);
    if (response) {
      return response.data;
    }
    new Error('Erro ao tentar cadastrar Motorista');
    return [];
  } catch (error) {
    console.error(error);
    new Error();
    return [];
  }
};
export const CombustivelService = {
  getAll,
  create,
};
export default CombustivelService;
