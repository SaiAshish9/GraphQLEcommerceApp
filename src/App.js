import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import {Switch,Route,Link,Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop'

import { setCurrentUser} from './redux/user/user-actions'
import { connect } from 'react-redux'

import Header from './components/header/header'
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import {auth,createUserProfileDocument} from './firebase/firebase'

class App extends React.Component {

// constructor(){
//   super()
//   this.state={
//     currentUser:null
//   }
// }

unsubscribeFromAuth=null


componentDidMount(){


  const {setCurrentUser}=this.props
this.unsubscribeFromAuth=  auth.onAuthStateChanged(async user=>{
    // this.setState({currentUser:user})
    if(user){
      const userRef= await createUserProfileDocument(user)

      userRef.onSnapshot(snapShot=>{


setCurrentUser({
  id:snapShot.id,
       ...snapShot.data()
})


      //   this.setState({
      //     currentUser:{
      //       id:snapShot.id,
      //       ...snapShot.data()
      //     }
      //   }
      //   // ,()=>{
      //   //   console.log(this.state);
      //   // }
      // )
      })
    }
setCurrentUser(user)
  })
}

componentWillUnmount(){
this.unsubscribeFromAuth()
}



  render(){

    return (
    <div>
         <Header />
         <Switch>

          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  exact path='/signin' component={SignIn} render={()=>this.props.currentUser?(<Redirect to='/' />):(<SignIn />)
          }/>


        </Switch>
    </div>
    );

  }

}
// currentUser={this.state.currentUser}

const mapStateToProps= ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps= dispatch =>({
setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
