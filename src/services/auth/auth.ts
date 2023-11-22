import { API } from '../../utils/Api';

interface IAuth {
  token?: string;
}

const login = async (email: string, password: string): Promise<IAuth> => {
  try {
    const { data } = await API.post<IAuth>('/login', { password, email });
    if (data.token) {
      return data;
    }
    new Error('Erro ao tentar fazer login');
    return { token: undefined };
  } catch (error) {
    console.error(error);
    new Error('Erro ao tentar fazer login');
    return { token: undefined}
  }
};
export const AuthService = {
  login,
};
