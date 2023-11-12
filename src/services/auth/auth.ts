import { API } from '../../utils/Api';

interface IAuth {
  token: string;
}


const login = async (
  email: string,
  password: string
  ): Promise<IAuth | Error> => {
    try {
    const { data } = await API.post('/login', { password, email });
    if (data.token) {
      return data
    } 
    return new Error('Erro ao tentar fazer login');
  } catch (error) {
    console.error(error);
    return new Error();
  }
};
export const AuthService = {
  login,
};
