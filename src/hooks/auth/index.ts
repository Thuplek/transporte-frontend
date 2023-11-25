import { AuthService } from '../../services/auth/auth';
import AuthStore from '../../stores/auth';

export function useAuth() {
  const login = async (email: string, password: string) => {
    const { login } = AuthService;
    const { setIsAutenticated } = AuthStore.getState();

    const { token } = await login(email, password);
    setIsAutenticated(token);
    //@ts-ignore
    const baseURLFront = process.env.VITE_URL_FRONT;

    window.location.href = baseURLFront + '/abastecimento';
  };

  return {
    login,
  };
}
