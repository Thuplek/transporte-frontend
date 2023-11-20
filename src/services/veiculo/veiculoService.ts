import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';


interface IVeiculo {
  data: [];
}


const getAll = async (
  ): Promise<IVeiculo | Error> => {
    
    try {
    const { data } = await API.get('/veiculo');
    if (data) {
      return data
    } 
    return new Error(MENSAGENS.ERRO_AO_BUSCAR_DADOS);
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const VeiculoService = {
  getAll,
};
export default VeiculoService;