import { FormControl, Input, InputLabel, Typography } from '@mui/material';
import { IMaskInput } from 'react-imask';
import * as React from 'react';
import { Control, Controller } from 'react-hook-form';

interface ICustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, ICustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={Number}
        scale={6}
        radix='.'
        // definitions={{
        //   '#': /[1-9]/,
        // }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);
interface ICustomNumberInput {
  label: string;
  name: string;
  error?: boolean;
  helperText?: string;
  control: Control<any, object>;
}
const CustomNumberInput: React.FC<ICustomNumberInput> = ({
  label,
  name,
  error,
  helperText,
  control,
  ...rest
}) => {
  return (
    <FormControl variant='standard'>
      <InputLabel htmlFor='formatted-text-mask-input'>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Input
              // value={values.textmask}
              // onChange={handleChange}
              {...field}
              name={name}
              inputComponent={TextMaskCustom as any}
            />
          );
        }}
        {...rest}
      />
      <Typography variant='caption' color={error ? 'error' : ''}>
        {helperText && helperText}
      </Typography>
    </FormControl>
  );
};

export default CustomNumberInput;
