import React,{useState} from 'react'

import {connect} from 'react-redux'

import FormInput from '../form-input/form-input.js'

import CustomButton from '../custom-button/custom-button'

import {auth,createUserProfileDocument} from '../../firebase/firebase'

import {signUpStart} from '../../redux/user/user-actions'

import './sign-up.scss'

// class SignUp extends React.Component
const SignUp=({signUpStart})=> {
  // constructor(){
  //   super()
  //
  //
  //   this.state={
  //     displayName:'',
  //     email:'',
  //     password:'',
  //     confirmPassword:''
  //   }
  // }

const [userCredentials,setCredentials]=useState({
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
})

const {displayName,email,password,confirmPassword} =userCredentials

const handleSubmit=async e =>{
  e.preventDefault()
  // const {signUpStart}=this.props;

  // this.state.

if(password !== confirmPassword){
  alert("password don't match")
  return
}
signUpStart({ displayName, email, password });

// try{

// const {user}= await auth.createUserWithEmailAndPassword(
//   email,
//   password
// )

// await  createUserProfileDocument(user,{displayName})
//
// this.setState({
//   displayName:'',
//   email:'',
//   password:'',
//   confirmPassword:''
// })
// }catch(e){
// console.log(e);
// }

}



const handleChange =e =>{
  const {name,value} = e.target

setCredentials({...userCredentials,[name]:value})
  // this.setState({[name]:value})
}


// render(){

  // const {displayName,email,password,confirmPassword} = this.state

  return(

  <div className='sign-up' style={{marginLeft:"50px"}}>

<h2 className='title'>I don't have a account</h2>

<span> Sign up with your email and password</span>


<form className='sign-up-form' onSubmit={handleSubmit}>

<FormInput
type='text'
name='displayName'
value={displayName}
onChange={handleChange}
label='Display Name'
required
/>
<FormInput
type='email'
name='email'
value={email}
onChange={handleChange}
label='Email'
required
/>
<FormInput
type='password'
name='password'
value={password}
onChange={handleChange}
label='Password'
required
/>
<FormInput
type='password'
name='confirmPassword'
value={confirmPassword}
onChange={handleChange}
label='Confirm Password'
required
/>

<CustomButton type='submit'  >
SIGN UP
</CustomButton>


</form>

  </div>


  )
// }

}

const mapDispatchToProps=dispatch=>({
  signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp)
