import { CAMPOS } from '@utils/conts';

export const visualizeDate = (date: string | Date): string => {
  if (!date) return CAMPOS.NULL;
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${day}/${month}/${year}`;
};
