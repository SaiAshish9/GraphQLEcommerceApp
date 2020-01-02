import React,{useState} from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


// import {auth,signInWithGoogle} from '../../firebase/firebase'

import { connect } from 'react-redux'

import {googleSignInStart,emailSignInStart } from '../../redux/user/user-actions'

import './sign-in.scss';

// class SignIn extends React.Component
const SignIn=({emailSignInStart,googleSignInStart})=> {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     email: '',
  //     password: ''
  //   };
  // }

const [userCredentials,setCredentials]=useState({email:'',password:''})


const {email,password} =userCredentials

  const handleSubmit = async event => {
    event.preventDefault();
    // const {emailSignInStart} = this.props
    // const {email,password}=this.state


emailSignInStart(email,password)
//     try{
//
// await auth.signInWithEmailAndPassword(email,password)
// this.setState({email:'',password:''})
//
//     }catch(e){
//       console.log(e.message);
//
//     }
//
//     this.setState({ email: '', password: '' });

  };

const  handleChange = event => {
    const { value, name } = event.target;


setCredentials({...userCredentials,[name]:value})
    // this.setState({ [name]: value });
  };

  // render() {
    // const {googleSignInStart}=this.props
    return (
      <div className='sign-in'>
        <h2> I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />

        <div className='buttons'>
          <CustomButton type='submit'> Sign In  </CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
               isGoogleSignIn
              style={{marginLeft:"5px"}}>
           Sign In With Google
              </CustomButton>
</div>

        </form>
      </div>
    );
  // }
}
// type=button does not triggers submit action
// signInWithGoogle

const mapDispatchToProps= dispatch =>({
  googleSignInStart:()=>dispatch(googleSignInStart()),
  emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))

})


export default connect(null,mapDispatchToProps)(SignIn);
