

// ==============================|| AUTH ROUTING ||============================== //

import { AbastecimentoPage } from "../pages/abastecimento";
import { AbastecimentoPartialsPage } from "../pages/abastecimento/abastecimentoPartials";

const AbastecimentoRoutes = {
    path: '/abastecimento',
    children: [
      {
        path: '',
        element: <AbastecimentoPage />,
      },
      {
        path: 'cadastro',
        element: <AbastecimentoPartialsPage />,
      },
    ],
  };
  
  export default AbastecimentoRoutes;
  