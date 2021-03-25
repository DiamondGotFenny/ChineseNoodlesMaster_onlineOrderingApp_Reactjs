export const fetchPaymethodData = (payMethod) => {
  const type = payMethod.charges.data[0].payment_method_details.card.brand;
  const info = payMethod.charges.data[0].payment_method_details.card.last4;
  const owner = payMethod.charges.data[0].customer.name; //this should from the stripe invoice in real project
  const phoneNumber = payMethod.charges.data[0].billing_details.phone;
  return { type, info, owner, phoneNumber };
};
