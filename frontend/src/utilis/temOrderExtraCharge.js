//this should be set in the web server
export const orderExtraCharge = () => {
  return {
    vat: 0.05, //rate
    discount: 0.02, //rate
    deliveringFee: 5, //amount
  };
};
