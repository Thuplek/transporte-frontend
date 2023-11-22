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
export const VeiculoService = {
  getAll,
};
export default VeiculoService;
