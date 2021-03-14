import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { getSeperatedOrders } from 'utilis/SeperateOrder';
import Button from 'react-bootstrap/Button';
import { PostOrderSubmit } from 'utilis/customHooks/useHandleOrderSubmit';

const CardCheckOutForm = () => {
  const orderInfo = useSelector((state) => state.orderInfo);
  const authInfo = useSelector((state) => state.authInfo);
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  console.log(orderInfo, 'orderInfo');

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const seperatedOrdersArr = getSeperatedOrders(orderInfo);

    const billingDetails = {
      name: orderInfo.selectedAdrs.receiver,
      email: orderInfo.email,
      phone: orderInfo.selectedAdrs.phoneNumber,
      address: {
        city: orderInfo.selectedAdrs.addressDetail.city,
        line1: orderInfo.selectedAdrs.addressDetail.addressLine1,
        line2: orderInfo.selectedAdrs.addressDetail.addressLine2,
        postal_code: orderInfo.selectedAdrs.zipcode,
      },
    };
    console.log(orderInfo.selectedAdrs, billingDetails, 'billingDetails');
    setProcessingTo(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: billingDetails,
      });
      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        console.log('[error]', paymentMethodReq.error.message);
        return;
      } else {
        console.log('[PaymentMethod]', paymentMethodReq.paymentMethod);
      }

      const orderData = {
        orderCharge: orderInfo.orderCharge,
        ordersList: seperatedOrdersArr,
        paymentMethod: paymentMethodReq.paymentMethod,
      };
      const post_endpoint = '/auth/payment';
      const clientSecret = await PostOrderSubmit(
        post_endpoint,
        authInfo,
        orderData
      );
      if (clientSecret) {
        console.log(clientSecret);
      }
    } catch (error) {}
  };

  const iframeStyles = {
    base: {
      color: '#383c40',
      fontSize: '16px',
      iconColor: '#fff',
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    },
    complete: {
      iconColor: '#cbf4c9',
    },
  };
  const cardElementOpts = {
    iconStyle: 'solid',
    style: iframeStyles,
    hidePostalCode: true,
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardElementOpts} />
      {checkoutError && <div className='cardErrorMsg'>{checkoutError}</div>}
      <Button
        variant='outline-primary'
        type='submit'
        disabled={!stripe || !elements}>
        {isProcessing ? 'Processing...' : 'Continue to checkout'}
      </Button>
    </form>
  );
};

export default CardCheckOutForm;
