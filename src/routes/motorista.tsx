// ==============================|| AUTH ROUTING ||============================== //

import { RequireAuth } from '@components/RequireAuth';
import { MotoristaPage } from '@app/pages/motoristas';
import { MotoristaPartialsPage } from '../pages/motoristas/motoristaPartials';

const MotoristaRoutes = {
  path: '/motorista',
  children: [
    {
      path: '',
      element: (
        <RequireAuth>
          <MotoristaPage />,
        </RequireAuth>
      ),
    },
    {
      path: 'cadastro',
      element: (
        <RequireAuth>
          <MotoristaPartialsPage />,
        </RequireAuth>
      ),
    },
  ],
};

export default MotoristaRoutes;
