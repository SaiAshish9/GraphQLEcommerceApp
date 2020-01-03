import React ,{useEffect} from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import {Switch,Route,Link,Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop'

import CheckoutPage from './pages/checkout/checkout'


import { createStructuredSelector} from 'reselect'


import { setCurrentUser} from './redux/user/user-actions'

import { checkUserSession } from './redux/user/user-actions'

import { connect } from 'react-redux'

// import { selectCollectionsForPreview} from './redux/shop/shop-selectors'


import Header from './components/header/header'
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import {auth,createUserProfileDocument
  // ,addCollectionAndItems
} from './firebase/firebase'

import { selectCurrentUser }  from './redux/user/user-selectors'

// class App extends React.Component
const App =({checkUserSession,currentUser})=> {

// constructor(){
//   super()
//   this.state={
//     currentUser:null
//   }
// }
// Observable pattern
// unsubscribeFromAuth=null

// componentDidMount(){


// checkUserSession()
  // ,collectionsArray
//
//   const {setCurrentUser}=this.props
// this.unsubscribeFromAuth=  auth.onAuthStateChanged(async user=>{
//     // this.setState({currentUser:user})
//     if(user){
//       const userRef= await createUserProfileDocument(user)
//       userRef.onSnapshot(snapShot=>{
// setCurrentUser({
//   id:snapShot.id,
//        ...snapShot.data()
// })


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
//       })
//     }
// // setCurrentUser(user)
// // addCollectionAndItems('collections',collectionsArray.map(({title,items}) => ({title,items}) ))
//   })
// }

// componentWillUnmount(){
// this.unsubscribeFromAuth()
// }


  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])

//renders only once

  // render(){

    return (
    <div>
         <Header />
         <Switch>

          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  exact path='/signin' component={SignIn} render={()=>currentUser?(<Redirect to='/' />):(<SignIn />)

          }/>
        <Route  exact path='/checkout' component={CheckoutPage} />


        </Switch>
    </div>
    );

  // }

}
// currentUser={this.state.currentUser}

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser
  // ,collectionsArray: selectCollectionsForPreview
})
//
// const mapDispatchToProps= dispatch =>({
// setCurrentUser:user=>dispatch(setCurrentUser(user))
// })

const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
