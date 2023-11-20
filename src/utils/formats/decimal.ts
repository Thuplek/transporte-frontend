export const formatDecimal = (value: string | number) => {
  if (!value) return '0,00';
  return Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });
};
export const formatDecimalKmL = (value: string | number) => {
  if (!value) return '0,00';
  const newValue = Number(value);
  if (newValue) {
    return formatDecimal(newValue);
  } else {
    return value;
  }
};
