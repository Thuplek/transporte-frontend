import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const InputDate: React.FC = () => {
  return (
    <LocalizationProvider adapterLocale='pt-BR' dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
  );
};
export default InputDate;
