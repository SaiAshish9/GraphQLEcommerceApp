import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import {Switch,Route,Link} from 'react-router-dom'
import ShopPage from './pages/shop/shop'

import Header from './components/header/header'


function App() {
  return (
  <div>
       <Header/>
       <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>


      </Switch>
  </div>
  );
}

export default App;
