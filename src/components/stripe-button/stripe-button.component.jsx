import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HCES7AmDuiXVttvtWKUKYsjFW72IZL1qrvvpGvczBFTQwMsq9cFVkBmFes4Je0x7P2UQEx0NpzhCtVsrJHsst1L004j0nN8yA";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Kah Now"
      name="MARACAS Ltd."
      billingAddress
      shippingAddress
      image="../../assets/logo/maracas.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
