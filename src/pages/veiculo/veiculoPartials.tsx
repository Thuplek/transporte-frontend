import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { LayoutBase } from '../../layout';

import { useForm, SubmitHandler } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateVeiculo } from '@hooks/veiculo/veiculoHook';

interface IVeiculoPartialsPage {
  type?: 'create' | 'update' | 'delete' | 'list';
}

const formVeiculoSchema = z.object({
  modelo: z.string(),
  placa: z.string().optional(),
});

type formVeiculoType = z.infer<typeof formVeiculoSchema>;

export const VeiculoPartialsPage: React.FC<IVeiculoPartialsPage> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formVeiculoType>({
    resolver: zodResolver(formVeiculoSchema),
  });
  const { mutate } = useCreateVeiculo();
  const onSubmit: SubmitHandler<formVeiculoType> = (data) => {
    mutate(data);
  };

  return (
    <LayoutBase title='Cadastro de Abastecimento'>
      <Box display={'flex'} component={Paper} p={2} gap={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item>
              <TextField
                label='Modelo'
                {...register('modelo')}
                helperText={errors?.modelo?.message}
                error={!!errors.modelo}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Placa'
                {...register('placa')}
                helperText={errors?.placa?.message}
                error={!!errors.placa}
              />
            </Grid>
          </Grid>
          <Box
            display={'flex'}
            alignContent={'flex-end'}
            justifyContent={'flex-end'}
            p={2}
          >
            <Button variant='contained' type='submit'>
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </LayoutBase>
  );
};
