import React from 'react'

import FormInput from '../form-input/form-input.js'

import CustomButton from '../custom-button/custom-button'

import {auth,createUserProfileDocument} from '../../firebase/firebase'

import './sign-up.scss'

class SignUp extends React.Component{
  constructor(){
    super()


    this.state={
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }



handleSubmit=async e =>{
  e.preventDefault()
  const {displayName,email,password,confirmPassword} = this.state

if(password !== confirmPassword){
  alert("password don't match")
  return
}

try{

const {user}= await auth.createUserWithEmailAndPassword(
  email,
  password
)

await  createUserProfileDocument(user,{displayName})

this.setState({
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
})
}catch(e){
console.log(e);
}

}



handleChange =e =>{
  const {name,value} = e.target

  this.setState({[name]:value})
}


render(){

  const {displayName,email,password,confirmPassword} = this.state
  return(

  <div className='sign-up' style={{marginLeft:"50px"}}>

<h2 className='title'>I don't have a account</h2>

<span> Sign up with your email and password</span>


<form className='sign-up-form' onSubmit={this.handleSubmit}>

<FormInput
type='text'
name='displayName'
value={displayName}
onChange={this.handleChange}
label='Display Name'
required
/>
<FormInput
type='email'
name='email'
value={email}
onChange={this.handleChange}
label='Email'
required
/>
<FormInput
type='password'
name='password'
value={password}
onChange={this.handleChange}
label='Password'
required
/>
<FormInput
type='password'
name='confirmPassword'
value={confirmPassword}
onChange={this.handleChange}
label='Confirm Password'
required
/>

<CustomButton type='submit'  >
SIGN UP
</CustomButton>


</form>

  </div>


  )
}

}

export default SignUp
