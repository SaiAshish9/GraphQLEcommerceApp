import React from 'react'

import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect'

import './checkout.scss'

import { selectCartItems,selectCartTotal } from '../../redux/cart/cart-selectors'

import { toggleCartHiddden } from '../../redux/cart/cart-actions'

import CheckoutItem from '../../components/checkout-item/checkout-item'

const CheckoutPage =({cartItems,total,dispatch})=>(
  <div className='checkout-page'>
  <div className='checkout-header'>
<div  className='header-block'>
<span>Product</span>
</div>
<div  className='header-block'>
<span>Description</span>
</div>
<div  className='header-block'>
<span>Quantity</span>
</div>
<div  className='header-block'>
<span>Price</span>
</div>
<div  className='header-block'>
<span>Remove</span>
</div>
  </div>
{
 cartItems.map(cartItem=>(
   <CheckoutItem cartItem={cartItem} key={cartItem.id} />
 )

 )

}

<div className='total'>
<span>TOTAL: ${total}</span>
</div>
</div>

)

const mapStateToProps=createStructuredSelector({
  cartItems:selectCartItems,
  total:selectCartTotal
})



export default connect(mapStateToProps)(CheckoutPage)
