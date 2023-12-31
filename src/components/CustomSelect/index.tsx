import { Autocomplete, Box, MenuItem, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
interface ISelect {
  options?: { label: string; value: string | number }[];
  name: string;
  label: string;
  value?: string | number;
  error?: boolean;
  helperText?: string;
  onChange: (value: string | number | undefined) => void;
}

export const Select: React.FC<ISelect> = ({
  label,
  options,
  value = null,
  onChange,
  error,
  helperText,
  ...rest
}) => {
  return (
    <Box>
      <Autocomplete
        getOptionLabel={(option) => option.label ?? option}
        limitTags={+10}
        id='combo-box-demo'
        options={options || []}
        value={options?.find((option) => option.value === value) ?? null}
        sx={{ minWidth: 250 }}
        onChange={(__event, item) => onChange(item?.value)}
        {...rest}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label={label}
              error={error}
              helperText={helperText}
            />
          );
        }}
        renderOption={(props, { label, value }) => {
          return (
            //@ts-ignore
            props['data-option-index'] < 10 && (
              <MenuItem
                {...props}
            //@ts-ignore
                key={`${value}-${props['data-option-index']}`}
                value={value}
              >
                {label}
              </MenuItem>
            )
          );
        }}
      />
    </Box>
  );
};
interface ICustomSelect {
  name: string;
  label: string;
  control: Control<any, object>;
  options: { label: string; value: string | number }[];
  error?: boolean;
  helperText?: string;
}
const CustomSelect: React.FC<ICustomSelect> = ({
  name,
  error,
  helperText,
  control,
  options,
  label,
}) => {
  return (
    <Controller
      control={control}
      render={({ field }) => {
        return (
          <Select
            label={label}
            options={options}
            {...field}
            name={name}
            error={error}
            helperText={helperText}
          />
        );
      }}
      name={name}
    />
  );
};

export default CustomSelect;
