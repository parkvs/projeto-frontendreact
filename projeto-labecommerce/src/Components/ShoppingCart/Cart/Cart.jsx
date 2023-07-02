import React from 'react'
import Items from '../Items/Items'
import { CartContainer } from './CartStyle';

const Cart = ({  amount,
  setAmount,
  cart,
  setCart}) => {

  const CartName = 'Cart'

  return (
    <>
    <CartContainer>
    <p className='cart-name'>{CartName}</p>
    <Items cart={cart}
    setCart={setCart}
    />
    </CartContainer>
    
    
    
    </>
  )
}

export default Cart