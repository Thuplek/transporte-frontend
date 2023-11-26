import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { LayoutBase } from '../../layout';

import { useForm, SubmitHandler } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateMotorista } from '@hooks/motorista/motoristaHook';

interface IMotoristaPartialsPage {
  type?: 'create' | 'update' | 'delete' | 'list';
}

const formMotoristaSchema = z.object({
  nome: z.string().optional(),
});

type formMotoristaType = z.infer<typeof formMotoristaSchema>;

export const MotoristaPartialsPage: React.FC<
  IMotoristaPartialsPage
> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formMotoristaType>({
    resolver: zodResolver(formMotoristaSchema),
  });
  const { mutate } = useCreateMotorista();
  const onSubmit: SubmitHandler<formMotoristaType> = (data) => {
    mutate(data);
  };

  return (
    <LayoutBase title='Cadastro de Abastecimento'>
      <Box display={'flex'} component={Paper} p={2} gap={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item>
              <TextField
                label='Nome'
                {...register('nome')}
                helperText={errors?.nome?.message}
                error={!!errors.nome}
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
