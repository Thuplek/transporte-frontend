import { MENSAGENS } from '@utils/conts';
import { API } from '../../utils/Api';
import { ICombustivel } from '@app/interfaces/combustivel';

const getAll = async (): Promise<ICombustivel[]> => {
  try {
    const { data } = await API.get('/combustivel');
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
const update = async (data: any): Promise<ICombustivel[]> => {
  console.log("🚀 ~ update ~ data=>", data)
  try {
    const response = await API.patch(`/combustivel/${data?.id}`, data);
    if (response) {
      return response.data;
    }
    new Error('Erro ao tentar atualizar combustivel');
    return [];
  } catch (error) {
    console.error(error);
    new Error();
    return [];
  }
};
export const CombustivelService = {
  getAll,
  update,
};
export default CombustivelService;
