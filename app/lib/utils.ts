export const formatCurrency = (amount: number) => {
    return (amount*1).toLocaleString('en-US', {
      currency: 'USD',
    });
  };