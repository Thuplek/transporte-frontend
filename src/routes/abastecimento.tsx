// ==============================|| AUTH ROUTING ||============================== //

import { RequireAuth } from '@components/RequireAuth';
import { AbastecimentoPage } from '../pages/abastecimento';
import { AbastecimentoPartialsPage } from '../pages/abastecimento/abastecimentoPartials';

const AbastecimentoRoutes = {
  path: '/abastecimento',
  children: [
    {
      path: '',
      element: (
        <RequireAuth>
          <AbastecimentoPage />,
        </RequireAuth>
      ),
    },
    {
      path: 'cadastro',
      element: (
        <RequireAuth>
          <AbastecimentoPartialsPage />,
        </RequireAuth>
      ),
    },
  ],
};

export default AbastecimentoRoutes;
