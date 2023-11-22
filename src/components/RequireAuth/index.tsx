import AuthStore from '@stores/auth';
import { Navigate } from 'react-router-dom';

interface IRequireAuth {
  children: React.ReactNode;
  redirectTo?: string;
}

export const RequireAuth: React.FC<IRequireAuth> = ({
  children,
  redirectTo = '/login',
}) => {
  const { token } = AuthStore();
  return token ? <>{children}</> : <Navigate to={redirectTo} />;
};
