import { LayoutBase } from '../../layout';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useGetAllMotorista } from '@hooks/motorista/motoristaHook';

export const MotoristaPage = () => {
  const { data: lsMotorista = [] } = useGetAllMotorista();

  const columns: GridColDef[] = [{ field: 'nome', headerName: 'Nome' }];

  return (
    <LayoutBase title='Motorista'>
      <DataGrid
        onFilterModelChange={(model) => console.log(model)}
        rows={lsMotorista || []}
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
