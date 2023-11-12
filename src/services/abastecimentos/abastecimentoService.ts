import { API } from '../../utils/Api';

interface IAbastecimento {
  data: [];
}


const getAll = async (
  ): Promise<IAbastecimento | Error> => {
    try {
    const { data } = await API.get('/abastecimento');
    if (data) {
      return {data}
    } 
    return new Error('Erro ao tentar fazer login');
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const AbastecimentoService = {
  getAll,
};
