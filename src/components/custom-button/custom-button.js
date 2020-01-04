import React from 'react';

import './custom-button.scss';

import {CustomButtonContainer} from './custom-button.styles'

const CustomButton = ({ children,isGoogleSignIn, inverted,...props }) => (
  <CustomButtonContainer
className={`${inverted ?'inverted':'' }
 ${isGoogleSignIn ?'google-sign-in':'' }
 custom-button` }
    {...props}>
    {children}
  </CustomButtonContainer>

// <CustomButtonContainer {...props}>
//
// {children}
//
// </CustomButtonContainer>
// arrays are Maps in firebase

);

export default CustomButton;
