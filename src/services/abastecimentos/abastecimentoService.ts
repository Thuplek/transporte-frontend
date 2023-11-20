import { API } from '../../utils/Api';
import { IAbastecimento } from '@interfaces/abastecimentos';

interface IAbastecimentoResponse {
  data: IAbastecimento[];
}
interface IAbastecimentoRequest {
  data: [];
}

const getAll = async (): Promise<IAbastecimentoResponse | Error> => {
  try {
    const { data } = await API.get('/abastecimento');
    if (data) {
      return { data };
    }
    return new Error('Erro ao tentar fazer login');
  } catch (error) {
    console.error(error);
    return new Error();
  }
};

const create = async (data: any): Promise<IAbastecimentoRequest | Error> => {
  try {
    const response = await API.post('/abastecimento', data);
    if (response) {
      return response.data;
    }
    return new Error('Erro ao tentar cadastrar abastecimento');
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const AbastecimentoService = {
  getAll,
  create,
};
