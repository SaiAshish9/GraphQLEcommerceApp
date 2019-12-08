import React from 'react'

import {connect} from 'react-redux'

import CartItem from '../cart-item/cart-item'

import {withRouter} from 'react-router-dom'

import { toggleCartHidden } from '../../redux/cart/cart-actions'


import {selectCartItems} from '../../redux/cart/cart-selectors'

import {createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button'

import './cart-dropdown.scss'

const CartDropDown =({cartItems,history,dispatch})=>(
  <div className='cart-dropdown'>
  <div className='cart-items'>
{
  cartItems.length ?
  cartItems.map(x=> <CartItem key={x.id} item={x} />)
  :
  <span className='empty-message'>Your cart is empty</span>

}

</div>
  <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>
    GO TO CHECKOUT</CustomButton>
</div>

)

// {cart:{cartItems}}

const mapStateToProps =createStructuredSelector({
  cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
