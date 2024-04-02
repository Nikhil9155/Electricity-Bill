import React, { useEffect, useState } from 'react';
import { RayzorPay, PaymentMethods } from '@rayzorpay/react-sdk';


const PaymentComponent = () => {
  const [rayzorPay, setRayzorPay] = useState(null);

  useEffect(() => {
    const initializeRayzorPay = async () => {
      const apiKey = 'rzp_test_jlhyhXxFUYXUdP';
      const rayzorPayInstance = new RayzorPay({
        apiKey: apiKey,
        environment: 'sandbox', // or 'production'
      });
      setRayzorPay(rayzorPayInstance);
    };

    initializeRayzorPay();
  }, []);

  const handlePayment = async () => {
    if (!rayzorPay) {
      console.error('Rayzor Pay SDK not initialized.');
      return;
    }

    const paymentData = {
      amount: 100, // Amount in cents
      currency: 'INR', // Currency code
      paymentMethod: PaymentMethods.CARD, // Payment method (CARD, UPI, etc.)
      description: 'Test Payment', // Payment description
    };

    try {
      const paymentResponse = await rayzorPay.createPayment(paymentData);
      console.log('Payment Response:', paymentResponse);
      // Handle payment success
    } catch (error) {
      console.error('Error creating payment:', error);
      // Handle payment error
    }
  };

  return (
    <div>
      <h1>Rayzor Pay Payment Integration</h1>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default PaymentComponent;
