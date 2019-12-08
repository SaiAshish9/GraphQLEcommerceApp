export const addItemToCart =(cartItems,cartItemToAdd)=>{
const existing = cartItems.find(
  cartItem => cartItem.id === cartItemToAdd.id
)


if(existing){
  return cartItems.map(x =>
   x.id === cartItemToAdd.id
   ? {...x,quantity:x.quantity + 1}
   : x

  )
}

return [...cartItems,{...cartItemToAdd,quantity:1}]

}

export const removeItemFromCart =(cartItems,cartItemToRemove)=>{

const existingCartItem = cartItems.find(
  cartItem => cartItem.id === cartItemToRemove.id
)

if(existingCartItem.quantity===1){
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

return cartItems.map(
  cartItem =>
  cartItem.id=== cartItemToRemove.id?
  {...cartItem,quantity:cartItem.quantity -1}:
  cartItem
)

}
