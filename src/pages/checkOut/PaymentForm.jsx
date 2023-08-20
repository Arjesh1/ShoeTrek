import React, {useEffect} from 'react'
import {PaymentElement, useStripe, useElements,} from '@stripe/react-stripe-js';

const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements();

    useEffect(()=>{
        if(!stripe) return

    }, [stripe])

  return (
    <form>
    <PaymentElement  />
    
  </form>
  )
}

export default PaymentForm
