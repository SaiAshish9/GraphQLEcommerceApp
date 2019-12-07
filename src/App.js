import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import {Switch,Route,Link} from 'react-router-dom'
import ShopPage from './pages/shop/shop'

import Header from './components/header/header'
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import {auth,createUserProfileDocument} from './firebase/firebase'

class App extends React.Component {

constructor(){
  super()
  this.state={
    currentUser:null
  }
}

unsubscribeFromAuth=null


componentDidMount(){
this.unsubscribeFromAuth=  auth.onAuthStateChanged(async user=>{
    // this.setState({currentUser:user})
    if(user){
      const userRef= await createUserProfileDocument(user)

      userRef.onSnapshot(snapShot=>{

        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        }
        // ,()=>{
        //   console.log(this.state);
        // }
      )
      })
    }
this.setState({currentUser:user})
  })
}

componentWillUnmount(){
this.unsubscribeFromAuth()
}



  render(){

    return (
    <div>
         <Header currentUser={this.state.currentUser}/>
         <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SignIn}/>


        </Switch>
    </div>
    );

  }

}

export default App;
