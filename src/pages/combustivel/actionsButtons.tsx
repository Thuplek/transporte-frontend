import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { GridValueGetterParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
interface IActionsButtonsProps {}
export const ActionsButtons: React.FC<
  IActionsButtonsProps & GridValueGetterParams
> = (props) => {
  const id = props.row.id;
  const navigate = useNavigate();
  return (
    <Box>
      <EditIcon
        onClick={() =>
          navigate(`/combustivel/editar/${id}`, { state: props.row })
        }
      ></EditIcon>
    </Box>
  );
};
