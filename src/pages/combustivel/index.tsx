import { LayoutBase } from '../../layout';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useGetAllCombustivel } from '@hooks/combustivel/combustivelHook';
import { ActionsButtons } from './actionsButtons';

export const CombustivelPage = () => {
  const { data: lsVeiculo = [] } = useGetAllCombustivel();

  const columns: GridColDef[] = [
    { field: 'nome', headerName: 'Nome' },
    { field: 'valor', headerName: 'Valor' },
    {
      field: 'actions',
      headerName: 'Ações',
      //@ts-ignore
      renderCell: (params) => <ActionsButtons {...params} />,
      // {
      //   console.log('🚀 ~ CombustivelPage ~ params=>', params);
      //   return (
      //     <>
      //       <button>Editar</button>
      //       <button>Excluir</button>
      //     </>
      //   );
      // },
      // valueGetter: (params: GridValueGetterParams) => new Date(params.row.data),
      // valueFormatter: (params: GridValueFormatterParams<Date>) =>
      //   visualizeDate(params.value),
    },
  ];

  return (
    <LayoutBase title='Motorista'>
      <DataGrid
        onFilterModelChange={(model) => console.log(model)}
        rows={lsVeiculo || []}
        columns={columns}
        // slots={{ toolbar: CustomToolbar }}
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
