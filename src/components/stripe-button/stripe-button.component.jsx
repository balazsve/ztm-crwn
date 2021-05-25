import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe accepts cent values with usd
  const publishableKey =
    "pk_test_51IugUmJzrUrRrHvYsTJhSrmccIsi3GSyS5ODkLp1dCmnjkfBtMlKrGffTGtmbB69lkYHLaLZkAczcIoulUylk7Z200Mub64SKZ";

  const onToken = (token) => {
    // just logging for testing purposes
    console.log(token);
    alert(`Payment Succesful token:${token}`);
  };

  return (
    <StripeCheckout
      // many field properties for different functions
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://www.dropbox.com/s/qqvvklco2g5u138/d7adc3176e87a81301ac7b7a481aba56.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel
      token={onToken} // onSuccess callback, passing value to the backend to process
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
