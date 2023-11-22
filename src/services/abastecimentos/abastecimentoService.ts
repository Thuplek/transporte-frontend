import { API } from '../../utils/Api';
import { IAbastecimento } from '@interfaces/abastecimentos';

const getAll = async (): Promise<IAbastecimento[]> => {
  try {
    const { data } = await API.get<IAbastecimento[]>('/abastecimento');
    if (data) {
      return data;
    }
    new Error('Erro ao tentar fazer login');
    return [];
  } catch (error) {
    console.error(error);
    new Error();
    return [];
  }
};

const create = async (data: any): Promise<IAbastecimento[]> => {
  try {
    const response = await API.post('/abastecimento', data);
    if (response) {
      return response.data;
    }
    new Error('Erro ao tentar cadastrar abastecimento');
    return [];
  } catch (error) {
    console.error(error);
    new Error();
    return [];
  }
};
export const AbastecimentoService = {
  getAll,
  create,
};
