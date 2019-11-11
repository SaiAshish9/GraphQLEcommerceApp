import React from 'react'
import shop_data from './data'

import CollectionPreview from  '../../components/preview/preview'


class ShopPage extends React.Component{
  constructor(props){
    super(props);


this.state={
  collections:shop_data
}

  }

render(){
  const {collections}=this.state
  return (
    <div className='shop-page'>
{
  collections.map(({id,...other}) =>(
    <CollectionPreview key={id} {...other}  />
  ))
}

     </div>


  )
}


}


export default ShopPage
