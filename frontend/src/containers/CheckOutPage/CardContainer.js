import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { STRIPE_PUBLIC_KEY } from 'services/TemEnvService';
import CardCheckOutForm from 'components/CardCheckOutForm';

const CardContainer = () => {
  const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  return (
    <Elements stripe={stripePromise}>
      <CardCheckOutForm />
    </Elements>
  );
};

export default CardContainer;
