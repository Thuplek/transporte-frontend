// ==============================|| AUTH ROUTING ||============================== //

import { CombustivelPage } from "@app/pages/combustivel";
import { CombustivelPartialsPage } from "@app/pages/combustivel/combustivelPartials";
import { RequireAuth } from "@components/RequireAuth";

const CombustivelRoutes = {
  path: '/combustivel',
  children: [
    {
      path: '',
      element: (
        <RequireAuth>
          <CombustivelPage />,
        </RequireAuth>
      ),
    },
    {
      path: 'cadastro',
      element: (
        <RequireAuth>
          <CombustivelPartialsPage />,
        </RequireAuth>
      ),
    },
    {
      path: 'editar/:idCombustivel/',
      element: (
        <RequireAuth>
          <CombustivelPartialsPage type="update" />,
        </RequireAuth>
      ),
    },
  ],
};

export default CombustivelRoutes;
