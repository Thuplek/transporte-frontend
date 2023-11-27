import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { IVeiculo } from '@app/interfaces/veiculo';

const getAll = async (): Promise<IVeiculo[]> => {
  try {
    const { data } = await API.get<IVeiculo[]>('/veiculo');
    if (data) {
      return data;
    }
    new Error(MENSAGENS.ERRO_AO_BUSCAR_DADOS);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const create = async (data: any): Promise<IVeiculo[]> => {
  try {
    const response = await API.post('/veiculo', data);
    if (response) {
      return response.data;
    }
    new Error('Erro ao tentar cadastrar Veiculo');
    return [];
  } catch (error) {
    console.error(error);
    new Error();
    return [];
  }
};
export const VeiculoService = {
  getAll,
  create,
};
export default VeiculoService;
