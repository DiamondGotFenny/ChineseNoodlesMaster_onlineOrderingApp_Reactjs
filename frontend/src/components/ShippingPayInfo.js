import React from 'react';
import { fetchPaymethodData } from 'utilis/fetchPaymentData';

const ShippingPayInfo = (props) => {
  const { shipInfo, payMethod } = props;
  const { receiver, addressDetail, phoneNumber } = shipInfo;
  const transAdrsTostr = (addressDetail) => {
    return `${addressDetail.addressLine1} ${addressDetail.addressLine2}, ${addressDetail.district},${addressDetail.city}`;
  };

  const paymentData = fetchPaymethodData(payMethod);
  return (
    <li id='shipNPayment' className='list-group-item'>
      <h4>Shipping and Payment: </h4>
      <div className='row'>
        <div className='col-md-4 text-left'>
          <div>
            <div className='shipNPayment-item-title'>SHIPPING ADDRESS:</div>
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
        <div className='col-md-4 text-left'>
          <div>
            <div className='shipNPayment-item-title'>BILLING ADDRESS:</div>
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
        <div className='col-md-4 text-left'>
          <div>
            <div className='shipNPayment-item-title'>CARD INFO:</div>
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
