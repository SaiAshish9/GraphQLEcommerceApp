import React from 'react';

import './custom-button.scss';

import {CustomButtonContainer} from './custom-button.styles'

const CustomButton = ({ children,isGoogleSignIn, inverted,...props }) => (
  <button
className={`${inverted ?'inverted':'' }
 ${isGoogleSignIn ?'google-sign-in':'' }
 custom-button` }
    {...props}>
    {children}
  </button>

// <CustomButtonContainer {...props}>
//
// {children}
//
// </CustomButtonContainer>
// arrays are Maps in firebase

);

export default CustomButton;
