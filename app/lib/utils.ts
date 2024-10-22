export const formatCurrency = (amount: number) => {
    return (amount*1).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };