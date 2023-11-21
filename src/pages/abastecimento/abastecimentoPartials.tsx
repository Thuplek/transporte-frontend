import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField,
} from '@mui/material';
import { LayoutBase } from '../../layout';
import { useGetAllVeiculos } from '@hooks/veiculo/veiculoHook.ts';
import { useGetAllCombustivel } from '@hooks/combustivel/combustivelHook.ts';
import { useGetAllMotorista } from '@hooks/motorista/motoristaHook.ts';
import { useGetAllLubrificante } from '@hooks/lubrificante/lubrificanteHook.ts';
import { useGetAllPosto } from '@hooks/posto/postoHook.ts';
import { useGetAllSecretaria } from '@hooks/secretaria/secretariaHook';
import { useGetAllEndereco } from '@hooks/endereco/enderecoHook';
import CustomSelect from '@components/CustomSelect';
import { useForm, SubmitHandler } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomNumberInput from '@components/CustomNumberInput';
import { useCreateAbastecimento } from '@hooks/abastecimento';

interface IAbastecimentoPartialsPage {
  type?: 'create' | 'update' | 'delete' | 'list';
}

const formAbastecimentoSchema = z.object({
  date: z
    .string()
    .transform((value) => new Date(value))
    .optional(),
  quantidadeLitros: z.string().transform((value) => Number(value)),
  lubrificanteLitros: z
    .string()
    .optional()
    .transform((value) => Number(value)),
  combustivel: z.number(),
  veiculo: z.number(),
  kmVeiculo: z
    .string()
    .optional()
    .transform((value) => Number(value)),
  motorista: z.number().optional(),
  lubrificante: z.number().optional(),
  posto: z.number(),
  secretaria: z.number(),
  cota: z
    .boolean()
    .optional()
    .transform((value) => Number(value)),
  observacao: z.string().optional(),
  autorizacao: z.string().optional(),
  endereco: z.number().optional(),
});

type formaAbastecimentoType = z.infer<typeof formAbastecimentoSchema>;

export const AbastecimentoPartialsPage: React.FC<
  IAbastecimentoPartialsPage
> = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formaAbastecimentoType>({
    resolver: zodResolver(formAbastecimentoSchema),
    defaultValues: {
      date: new Date().toISOString(),
    },
  });
  const { mutate } = useCreateAbastecimento();
  const onSubmit: SubmitHandler<formaAbastecimentoType> = (data) => {
    console.log('🚀 ~ data=>', data);
    mutate(data);
  };
  console.log('🚀 ~ errors=>', errors);
  const { data: lsVeiculos = [] } = useGetAllVeiculos();
  const { data: lsCombustivel = [] } = useGetAllCombustivel();
  const { data: lsMotorista = [] } = useGetAllMotorista();
  const { data: lsLubrificante = [] } = useGetAllLubrificante();
  const { data: lsPosto = [] } = useGetAllPosto();
  const { data: lsSecretaria = [] } = useGetAllSecretaria();
  const { data: lsEndereco = [] } = useGetAllEndereco();

  return (
    <LayoutBase title='Cadastro de Abastecimento'>
      <Box display={'flex'} component={Paper} p={2} gap={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item>
              <TextField
                type='date'
                {...register('date')}
                error={!!errors.date}
                helperText={errors.date?.message}
              />
            </Grid>
            <Grid item>
              <CustomNumberInput
                control={control}
                label='Quantidade de Litros'
                {...register('quantidadeLitros')}
                error={!!errors.quantidadeLitros}
                helperText={errors.quantidadeLitros?.message}
              />
            </Grid>
            <Grid item>
              <CustomSelect
                label='Combustivel'
                name='combustivel'
                error={!!errors.combustivel}
                helperText={errors.combustivel?.message}
                control={control}
                options={lsCombustivel?.map(({ nome, id }) => ({
                  value: id,
                  label: nome,
                  key: id,
                }))}
              />
            </Grid>
            <Grid item>
              <CustomSelect
                control={control}
                name='veiculo'
                label='Veiculo'
                error={!!errors.veiculo}
                helperText={errors.veiculo?.message}
                options={lsVeiculos?.map(({ placa, modelo, id }) => ({
                  label: `${modelo} ${placa ? '- ' + placa : ''}`,
                  value: id,
                  key: id,
                }))}
              />
            </Grid>

            <Grid item>
              <TextField label='KM Veiculo' {...register('kmVeiculo')} />
            </Grid>
            <Grid item>
              <CustomSelect
                name='motorista'
                control={control}
                error={!!errors.motorista}
                helperText={errors.motorista?.message}
                label='Motorista'
                options={lsMotorista?.map(({ id, nome }) => ({
                  label: nome,
                  value: id,
                  key: id,
                }))}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Lubrificante (qtdd)'
                {...register('lubrificanteLitros')}
              />
            </Grid>
            <Grid item>
              <CustomSelect
                name='lubrificante'
                control={control}
                error={!!errors.lubrificante}
                helperText={errors.lubrificante?.message}
                label='Lubrificante'
                options={lsLubrificante?.map(({ nome, id }) => ({
                  label: nome,
                  value: id,
                  key: id,
                }))}
              />
            </Grid>
            <Grid item>
              <CustomSelect
                name='posto'
                control={control}
                label='Posto'
                error={!!errors.posto}
                helperText={errors.posto?.message}
                options={lsPosto?.map(({ nome, id }) => ({
                  label: nome,
                  value: id,
                  key: id,
                }))}
              />
            </Grid>
            <Grid item>
              <CustomSelect
                name='secretaria'
                control={control}
                label='Secretaria'
                error={!!errors.secretaria}
                helperText={errors.secretaria?.message}
                options={lsSecretaria?.map(({ nome, id }) => ({
                  label: nome,
                  value: id,
                  key: id,
                }))}
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Switch />}
                label='Cota'
                labelPlacement='top'
                {...register('cota')}
              />
            </Grid>
            <Grid item>
              <TextField label='Observacao' {...register('observacao')} />
            </Grid>
            <Grid item>
              <TextField label='Autorizacao' {...register('autorizacao')} />
            </Grid>
            <Grid item>
              <CustomSelect
                name='endereco'
                error={!!errors.endereco}
                helperText={errors.endereco?.message}
                control={control}
                label='Endereco'
                options={lsEndereco?.map(({ regiao, id }) => ({
                  value: id,
                  label: `${regiao}`,
                  key: id,
                }))}
              />
            </Grid>
          </Grid>
          <Box
            display={'flex'}
            alignContent={'flex-end'}
            justifyContent={'flex-end'}
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
