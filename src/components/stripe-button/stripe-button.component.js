import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KSjpCBYp3P0VPu4qlVoSK2SwYMcS0HMwJmI8bPOkJFGDtxyrgYvz2EZNKBeb8n916k41ucT3Wu9qKI3q3QWpklJ00khAWF3Xz";
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shopping React Ltd."
      billingAddress
      shippingAddress
      image="https://pngset.com/images/logo-react-js-logo-svg-symbol-trademark-grenade-bomb-transparent-png-2691562.png"
      description={`Your total payment is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={() => {
        alert("Payment Successful");
      }}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
