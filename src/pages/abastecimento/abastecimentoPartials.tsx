import { Box, Paper, TextField } from '@mui/material';
import { LayoutBase } from '../../layout';

interface IAbastecimentoPartialsPage {
  type: 'create' | 'update' | 'delete' | 'list';
}
export const AbastecimentoPartialsPage: React.FC<
  IAbastecimentoPartialsPage
> = () => {
  return (
    <LayoutBase title='Cadastro de Abastecimento'>
      <Box display={'flex'} component={Paper} p={2} gap={2}>
        <TextField type='date' />
        <TextField label="" />
      </Box>
    </LayoutBase>
  );
};
