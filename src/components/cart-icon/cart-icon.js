import React from 'react'
import './cart-icon.scss'
import { connect } from 'react-redux'

import {selectCartItemsCount} from '../../redux/cart/cart-selectors'

import { toggleCartHidden } from '../../redux/cart/cart-actions'

import { ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'


const CartIcon=({toggleCartHidden,itemCount})=>(
  <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps=dispatch=>({
  toggleCartHidden:()=> dispatch(toggleCartHidden())
})
// {cart :{cartItems }



// cartItems.reduce((acc,cartItem)=>acc+cartItem.quantity,0))

const mapStateToProps=(state)=>({
  itemCount:selectCartItemsCount(state)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
