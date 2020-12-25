import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hl7zcCANmbdDgekL0sXFuFedFDS7cM30chjzRLauUSAhSm2zkLDGLauNbWoccpwEnehS0Btw2zKZCJgPuZkq2as00nvQiBYl2'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Dan CLothing Ltd.'
            billingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;