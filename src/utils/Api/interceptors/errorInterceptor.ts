import { MENSAGENS } from '@utils/conts';
import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de conexao.'));
  }
  if (error.response?.status === 401) {
    // AuthStore.getState().setIsAutenticated(undefined);
    // redirecionar para tela de login
    window.location.href = '/login';

    return Promise.reject(new Error(MENSAGENS.SESSAO_EXPIRADA));
  }
  return Promise.reject(error);
};
