import { LayoutBase } from '../../layout';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useGetAllVeiculos } from '@hooks/veiculo/veiculoHook';

export const VeiculoPage = () => {
  const { data: lsVeiculo = [] } = useGetAllVeiculos();

  const columns: GridColDef[] = [
    { field: 'placa', headerName: 'Placa' },
    { field: 'modelo', headerName: 'Modelo' },
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
