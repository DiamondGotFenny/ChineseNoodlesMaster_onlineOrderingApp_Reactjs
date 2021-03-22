import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { PostOrderSubmit } from 'utilis/customHooks/useHandleOrderSubmit';
import history from 'services/history';
import { clearShoppingCart } from 'actions/orderAction';

const CardCheckOutForm = () => {
  const orderInfo = useSelector((state) => state.orderInfo);
  const authInfo = useSelector((state) => state.authInfo);
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const dispatch = useDispatch();
  console.log(orderInfo, 'orderInfo');

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const billingDetails = {
      name: orderInfo.orderInfo.selectedAdrs.receiver,
      email: orderInfo.orderInfo.email,
      phone: orderInfo.orderInfo.selectedAdrs.phoneNumber,
      address: {
        city: orderInfo.orderInfo.selectedAdrs.addressDetail.city,
        line1: orderInfo.orderInfo.selectedAdrs.addressDetail.addressLine1,
        line2: orderInfo.orderInfo.selectedAdrs.addressDetail.addressLine2,
        postal_code: orderInfo.orderInfo.selectedAdrs.zipcode,
      },
    };
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
      }

      const orderData = {
        orderCharge: orderInfo.orderCharge,
        orderInfo: orderInfo.orderInfo,
        paymentMethod: paymentMethodReq.paymentMethod,
      };
      const post_endpoint = '/auth/payment';
      const { error: submitError, data: orderDataBack } = await PostOrderSubmit(
        post_endpoint,
        authInfo,
        orderData
      );
      if (submitError) {
        setCheckoutError(submitError);
        setProcessingTo(false);
        return;
      }
      console.log(orderDataBack, 'orderDataBack');

      const {
        error: comfirmError,
        paymentIntent,
      } = await stripe.confirmCardPayment(orderDataBack.payment.client_secret);

      if (comfirmError) {
        setCheckoutError(comfirmError.message);
        setProcessingTo(false);
        return;
      }
      console.log(paymentIntent, 'payment Success');
      dispatch(clearShoppingCart()); //clear shopping cart after the user makea successful payment
      history.push(`/paySuccess/${orderInfo.orderInfo.id}`);
    } catch (error) {
      setCheckoutError(error.message);
    }
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
