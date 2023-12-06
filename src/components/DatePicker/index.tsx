import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Control, Controller } from 'react-hook-form';
interface IInputDate {
name: string;
control: Control<any, object>;
}
const InputDate: React.FC<IInputDate> = ({  name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <LocalizationProvider
            adapterLocale='pt-BR'
            dateAdapter={AdapterDayjs}
          >
            <DatePicker
              format='DD/MM/YYYY'
              onChange={(date) => {
                //@ts-ignore
                field.onChange(date?.toISOString());
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};
export default InputDate;
