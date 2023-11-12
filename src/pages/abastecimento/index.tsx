import { useEffect } from 'react';
import { useAbastecimento } from '../../hooks/abastecimento';
import { LayoutBase } from '../../layout';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AbastecimentoStore from '../../strores/abastecimento';

export const AbastecimentoPage = () => {
  const { getAll } = useAbastecimento();
  const {lsAbastecimento} = AbastecimentoStore();
  console.log("🚀 ~ AbastecimentoPage ~ lsAbastecimento=>", lsAbastecimento)
  useEffect(() => {
    getAll();
  }, []);

  const columns: GridColDef[] = [
    { field: 'autorizacao', headerName: 'Autorizacao', width: 70 },
    { field: 'valor_total', headerName: 'valor total', width: 130 },
    { field: 'quantidade_lt', headerName: 'quantidade lt', width: 130 },
    { field: 'data', headerName: 'data', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
    return (
    <LayoutBase title='Abastecimento'>
      <DataGrid
        rows={lsAbastecimento || []}
        columns={columns}
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
