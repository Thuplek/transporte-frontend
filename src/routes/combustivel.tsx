

// ==============================|| AUTH ROUTING ||============================== //

const CombustivelRoutes = {
    path: '/combustivel',
    children: [
      {
        path: '',
        element: <>Combustivel</>,
      },
      {
        path: 'detalhes',
        element: <></>,
      },
    ],
  };
  
  export default CombustivelRoutes;
  