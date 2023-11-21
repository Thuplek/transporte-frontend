import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/auth/auth';
import AuthStore from '../../stores/auth';

export function useAuth() {
  const login = async (email: string, password: string) => {
    const { login } = AuthService;
    const { setIsAutenticated } = AuthStore.getState();

    const { token } = await login(email, password);
    setIsAutenticated(token);
    window.location.href = '/abastecimento';
  };

  return {
    login,
  };
}
