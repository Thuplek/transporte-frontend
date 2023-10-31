export const formatMoney = (entry) => {
    if (isNaN(entry)) return '';
    if (!entry) return '';

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(entry);
  };

  export const formatLts = (value,) => {
    if(!value){
      return null;
    }
    return `${new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(value)}`;
  }