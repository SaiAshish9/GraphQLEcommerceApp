import React from 'react'
// import {Link } from 'react-router-dom'
import { connect } from 'react-redux'



import { createStructuredSelector} from 'reselect'


import { selectCartHidden }  from '../../redux/cart/cart-selectors'

import { selectCurrentUser }  from '../../redux/user/user-selectors'

import  { signOutStart} from '../../redux/user/user-actions'

import CartIcon from '../cart-icon/cart-icon'

import CartDropDown from '../cart-dropdown/cart-dropdown'

import {ReactComponent as Logo} from '../../assests/crown.svg'
import {auth } from '../../firebase/firebase'


import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'

import './header.scss'

const Header=({currentUser,hidden,signOutStart})=>(

<HeaderContainer>
  <LogoContainer  to="/">
    <Logo className='logo'/>
   </LogoContainer>


<OptionsContainer>
<OptionLink to="/shop">
SHOP
</OptionLink>
<OptionLink to="/">
CONTACT
</OptionLink>
{currentUser?
  <OptionLink as='div' onClick={signOutStart}


    >
SIGN OUT
</OptionLink>
  :
  <OptionLink  to='/signin'>

SIGN IN

</OptionLink>
}
<CartIcon />
</OptionsContainer>
{
  hidden?null:<CartDropDown />
}

</HeaderContainer>


)

// onClick={()=>auth.signOut()}

// {user:{currentUser},cart:{hidden}}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})


const mapDispatchToProps=dispatch=>({
signOutStart:()=>dispatch(signOutStart())

})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
