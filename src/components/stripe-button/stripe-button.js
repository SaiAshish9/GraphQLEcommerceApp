import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =( { price })=>{
  const priceForStripe = price * 100;
  const publishableKey ='pk_test_JnEBwFlFPAg4xuhUy0a0EbcL00jMkj0328'

const onToken =token=>{
  console.log(token);
  alert('Payment Successful')
}

return (
  < StripeCheckout
  label='Pay Now'
  name='My Amazon'
  billingAddress
  shippingAddress
  image='https://svgshare.com/i/CUz.svg'
  description={`Your total is $${price}`}
  amount={priceForStripe}
  paneLabel='Pay Now'
  token={onToken}
  stripeKey={publishableKey}
  />
)

}

export default StripeCheckoutButton
