import { useRoutes } from 'react-router-dom';
import loginRoutes from './login';
import AbastecimentoRoutes from './abastecimento';
import CombustivelRoutes from './combustivel';
import MotoristaRoutes from './motorista';

export default function Routes() {
  return useRoutes([loginRoutes, AbastecimentoRoutes, CombustivelRoutes,MotoristaRoutes]);
}
