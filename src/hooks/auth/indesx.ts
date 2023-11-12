import { AuthService } from '../../services/auth/auth';
import AuthStore from '../../strores/auth';

export function useAuth() {
  const login = async (email: string, password: string) => {
    const { login } = AuthService;
    const { setIsAutenticated } = AuthStore.getState();

    const { token } = await login(email, password);
    setIsAutenticated(token);
  };
  return {
    login,
  };
}
