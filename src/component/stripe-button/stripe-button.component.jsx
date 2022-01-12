import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KGwP5SHxLAaU6u9D4IkXzrDczow2MT8upKJASTrOE1RBCP8qL0NUKR4yI7dMlcjSMhgGL6yEXXv62LHzZVCyfBe00R3xFUDro";

  const onToken = (token) => {
    //In Prodction, this function should send the token to backend in order to process the payment
    console.log(token);
    alert("Payment Successful!");
  };

  console.log(onToken, publishableKey);

  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      currency="USD"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLable="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
