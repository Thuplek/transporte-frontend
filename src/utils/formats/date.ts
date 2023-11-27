import { CAMPOS } from '@utils/conts';

export const visualizeDate = (date: string | Date,params): string => {
  if(params.id == 25458){
    console.log("🚀 ~ visualizeDate ~ date=>", date)
    const newDate = new Date(date);
    console.log("🚀 ~ visualizeDate ~ newDate=>", newDate)
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
  }
  
  if (!date) return CAMPOS.NULL;
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${day}/${month}/${year}`;
};
