import {combineReducers} from 'redux'

import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
//storage -- localstorage
//sessionstorage

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'

import shopReducer from './shop/shop-reducer'


import directoryReducer from './directory/directory-reducer'

const persistConfig ={
  key:'root',
  //at what point we want to store
  storage,
  whitelist:['cart']
  //which we want to store
}

const rootReducer=combineReducers({
  user:userReducer,
  cart:cartReducer,
  directory:directoryReducer,
  shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer)
