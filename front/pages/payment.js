
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentContainer from '../containers/payment';
const stripe = loadStripe('pk_test_51JZVxnLkFhXapQcDHtiAhOLfYlAgmo70k0cj5v0kwjVgeFeK3d3fYNfu1WOPukLldb63UzhIC2uX9x7tt5LJlQyY00eRD2UohJ')
export default function PaymentPage() {
  return <Elements stripe={stripe}>
    <PaymentContainer/>
  </Elements>
}
