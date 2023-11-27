import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { LayoutBase } from '../../layout';

import { useForm, SubmitHandler } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUpdateCombustivel } from '@hooks/combustivel/combustivelHook';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CustomNumberInput from '@components/CustomNumberInput';

interface IVeiculoPartialsPage {
  type?: 'create' | 'update' | 'delete' | 'list';
}

const formCombustivelSchema = z.object({
  nome: z.string(),
  valor: z.string().optional(),
});

type formCombustivelType = z.infer<typeof formCombustivelSchema>;

export const CombustivelPartialsPage: React.FC<IVeiculoPartialsPage> = ({
  type,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<formCombustivelType>({
    resolver: zodResolver(formCombustivelSchema),
  });
  const params = useParams();
  useEffect(() => {
    searchDadosUpdate();
  }, [params?.idCombustivel]);
  const { state } = useLocation();

  const searchDadosUpdate = () => {
    console.log('🚀 ~ searchDadosUpdate ~ state=>', state);
    if (type === 'update') {
      const { valor, nome } = state || {};
      setValue('valor', valor.toString());
      setValue('nome', nome);
    }
  };
  // const { mutate } = useCreateCombustivel();
  const { mutate: mutateUpDate } = useUpdateCombustivel();
  const onSubmit: SubmitHandler<formCombustivelType> = (data) => {
    if (type === 'update') {
      mutateUpDate({ ...data, id: state?.id });
    }
    // mutate(data);
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
            <Grid item>
              <CustomNumberInput
                control={control}
                label='Valor'
                {...register('valor')}
                error={!!errors.valor}
                helperText={errors.valor?.message}
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
