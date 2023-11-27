import { RequireAuth } from '@components/RequireAuth';

import { VeiculoPage } from '@app/pages/veiculo';
import { VeiculoPartialsPage } from '@app/pages/veiculo/veiculoPartials';

const VeiculoRoutes = {
  path: '/veiculo',
  children: [
    {
      path: '',
      element: (
        <RequireAuth>
          <VeiculoPage />,
        </RequireAuth>
      ),
    },
    {
      path: 'cadastro',
      element: (
        <RequireAuth>
          <VeiculoPartialsPage />,
        </RequireAuth>
      ),
    },
  ],
};

export default VeiculoRoutes;
