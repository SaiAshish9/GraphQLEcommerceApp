import React from 'react'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'



import { createStructuredSelector} from 'reselect'


import { selectCartHidden }  from '../../redux/cart/cart-selectors'

import { selectCurrentUser }  from '../../redux/user/user-selectors'


import CartIcon from '../cart-icon/cart-icon'

import CartDropDown from '../cart-dropdown/cart-dropdown'

import {ReactComponent as Logo} from '../../assests/crown.svg'
import {auth } from '../../firebase/firebase'

import './header.scss'

const Header=({currentUser,hidden})=>(

<div className='header'>
  <Link className="logo-container" to="/">
    <Logo className='logo'/>
   </Link>
<div className='options'>
<Link className="option" to="/shop">
SHOP
</Link>
<Link className="option" to="/">
CONTACT
</Link>
{currentUser?
  <div className='option' onClick={()=>auth.signOut()}


    >
SIGN OUT
</div>
  :
  <Link className='option'  to='/signin'>

SIGN IN

  </Link>
}
<CartIcon />
</div>
{
  hidden?null:<CartDropDown />
}

</div>


)
// {user:{currentUser},cart:{hidden}}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)
