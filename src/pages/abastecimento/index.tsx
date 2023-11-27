import { useEffect } from 'react';
import { useAbastecimento } from '../../hooks/abastecimento';
import { LayoutBase } from '../../layout';
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import AbastecimentoStore from '../../stores/abastecimento';
import { formatDecimalKmL, visualizeDate } from '@utils/formats';
import { useGetAllCombustivel } from '@hooks/combustivel/combustivelHook';
import {
  getCombustivelById,
  getMotoristaById,
  getPostoById,
  getSecretariaById,
  getVeiculoById,
} from '@utils/function';
import { getEnderecoById } from '@utils/function/endereco';
import { useGetAllEndereco } from '@hooks/endereco/enderecoHook';
import { CAMPOS } from '@utils/conts';
import { useGetAllLubrificante } from '@hooks/lubrificante/lubrificanteHook';
import { useGetAllVeiculos } from '@hooks/veiculo/veiculoHook';
import { useGetAllMotorista } from '@hooks/motorista/motoristaHook';
import { useGetAllPosto } from '@hooks/posto/postoHook';
import { useGetAllSecretaria } from '@hooks/secretaria/secretariaHook';
import { getlubrificanteById } from '@utils/function/lubrificante';
import CustomToolbar from '@components/CustomToolbarDataGrid';

export const AbastecimentoPage = () => {
  const { getAll } = useAbastecimento();
  const { lsAbastecimento } = AbastecimentoStore();
  const { data: lsVeiculo } = useGetAllVeiculos();
  const { data: lsCombustivel = [] } = useGetAllCombustivel();
  const { data: lsMotorista = [] } = useGetAllMotorista();
  const { data: lsLubrificante = [] } = useGetAllLubrificante();
  const { data: lsPosto = [] } = useGetAllPosto();
  const { data: lsSecretaria = [] } = useGetAllSecretaria();
  const { data: lsEndereco = [] } = useGetAllEndereco();

  useEffect(() => {
    getAll();
  }, []);

  const columns: GridColDef[] = [
    { field: 'autorizacao', headerName: 'Autorização' },
    { field: 'valor_total', headerName: 'Valor total', type: 'number' },
    { field: 'quantidade_lt', headerName: 'Quantidade lt' },
    {
      field: 'data',
      headerName: 'Data',
      type: 'dateTime',
      valueGetter: (params: GridValueGetterParams) => new Date(params.row.data),
      valueFormatter: (params: GridValueFormatterParams<Date>) =>
        visualizeDate(params.value,params),
    },
    {
      field: 'obs',
      headerName: 'Oberservação',
      type: 'string',
    },
    {
      field: 'cota',
      headerName: 'Cota',
      type: 'boolean',
    },
    {
      field: 'km',
      headerName: 'KM',
      type: 'number',
    },
    {
      field: 'km_l',
      headerName: 'km/L',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) =>
        formatDecimalKmL(params.row.km_l),
    },

    {
      field: 'id_combustivel',
      headerName: 'Combustivel',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) =>
        getCombustivelById(params.row.id_combustivel, lsCombustivel)?.nome,
    },
    {
      field: 'id_endereco',
      headerName: 'Endereço',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) => {
        if (!params.row.id_endereco) return CAMPOS.NULL;
        const endereco = getEnderecoById(params.row.id_endereco, lsEndereco);
        return endereco?.regiao;
      },
    },
    {
      field: 'id_lubrificante',
      headerName: 'Lubrificante',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) => {
        if (!params.row.id_lubrificante) return CAMPOS.NULL;
        const lubrificante = getlubrificanteById(
          params.row.id_lubrificante,
          lsLubrificante
        );
        return lubrificante?.nome;
      },
    },
    {
      field: 'lubrificante_lt',
      headerName: 'Lub Lt',
      type: 'string',
    },
    {
      field: 'id_motorista',
      headerName: 'Motorista',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) => {
        if (!params.row.id_motorista) return CAMPOS.NULL;
        const motorista = getMotoristaById(
          params.row.id_motorista,
          lsMotorista
        );
        return motorista?.nome;
      },
    },
    {
      field: 'id_posto',
      headerName: 'Posto',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) => {
        if (!params.row.id_posto) return CAMPOS.NULL;
        const posto = getPostoById(params.row.id_posto, lsPosto);
        return posto?.nome;
      },
    },
    {
      field: 'id_secretaria',
      headerName: 'Secretaria',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) => {
        if (!params.row.id_secretaria) return CAMPOS.NULL;
        const secretaria = getSecretariaById(
          params.row.id_secretaria,
          lsSecretaria
        );
        return secretaria?.nome;
      },
    },
    {
      field: 'id_veiculo',
      headerName: 'Veiculo',
      type: 'string',
      valueGetter: (params: GridValueGetterParams) => {
        if (!params.row.id_veiculo) return CAMPOS.NULL;
        const veiculo = getVeiculoById(params.row.id_veiculo, lsVeiculo);
        return `${veiculo?.modelo} - ${veiculo?.placa}`;
      },
    },

    /* 
  km_antigo: string;
  lubrificante_lt: number;
  */
  ];

  return (
    <LayoutBase title='Abastecimento'>
      <DataGrid
        onFilterModelChange={(model) => console.log(model)}
        rows={lsAbastecimento || []}
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
      />{' '}
    </LayoutBase>
  );
};
