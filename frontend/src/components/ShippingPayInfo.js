import React from 'react';

const ShippingPayInfo = (props) => {
  const { shipInfo, payMethod } = props;
  console.log(shipInfo, payMethod, 'shipInfo, payMethod');
  const { receiver, addressDetail, phoneNumber } = shipInfo;
  const transAdrsTostr = (addressDetail) => {
    return `${addressDetail.addressLine1} ${addressDetail.addressLine2}, ${addressDetail.district},${addressDetail.city}`;
  };
  const fetchPaymethodData = (payMethod) => {
    const type = payMethod.charges.data[0].payment_method_details.card.brand;
    const info = payMethod.charges.data[0].payment_method_details.card.last4;
    const owner = payMethod.charges.data[0].customer.name; //this should from the stripe invoice in real project
    const phoneNumber = payMethod.charges.data[0].billing_details.phone;
    return { type, info, owner, phoneNumber };
  };
  const paymentData = fetchPaymethodData(payMethod);
  return (
    <li id='shipNPayment' className='list-group-item'>
      <h4>Shipping and Payment</h4>
      <div className='row'>
        <div className='col-4 text-left'>
          <div>
            SHIPPING ADDRESS:
            <div className='shipping-address-value'>
              <h5>
                Receiver: <span className='receiver-name'>{receiver}</span>
              </h5>
              <p>{transAdrsTostr(addressDetail)}</p>
              <p>
                Phone Number:
                <span className='adrs-phone-num'>{phoneNumber}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-4 text-left'>
          <div>
            BILLING ADDRESS:
            <div className='billing-address-value'>
              <h5>
                Receiver: <span className='receiver-name'>{receiver}</span>
              </h5>
              <p>{transAdrsTostr(addressDetail)}</p>
              <p>
                Phone Number:
                <span className='adrs-phone-num'>{phoneNumber}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-4 text-left'>
          <div>
            CARD INFO:
            <div className='payment-value'>
              <h5>
                <span className='payment-type'>{paymentData.type}</span>:
                <span className='card-last4'>{`**** ${paymentData.info}`}</span>
              </h5>
              <p className='name'>{paymentData.owner}</p>
              <p>
                Phone Number:
                <span className='adrs-phone-num'>
                  {paymentData.phoneNumber}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShippingPayInfo;
