import React,{useEffect,useState} from 'react'
import CollectionItem from '../../components/item/item'


import { connect } from 'react-redux'

import { selectCollection} from '../../redux/shop/shop-selectors'

import './collection.scss'

import { firestore } from '../../firebase/firebase'

import collection from '../../redux/shop/data'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';



const CollectionPage = ({ collection,match }) => {

const {title,items} = collection

  // const [title,setTitle]=useState(required.title)
  // const [items,setItems]=useState([])
  // const [url,setUrl]=useState(match.params.collectionId)


// console.log(match.params.collectionId);

// componentWillUnmount
//
// useEffect(()=>{
// console.log('i am subscribing');
// const unsubscribeFromCollections=firestore
// .collection('collections')
// .onSnapShot(snapShot=>console.log(snapShot))
//
//   return ()=>{
//     console.log('i am unsubscribing');
//
// unsubscribeFromCollections()
//   }
// },[])

// useEffect(()=>{
//   let {title,items} = required
//   console.log(required);
// // },[])
// useEffect(()=>{
// //   if(title)
// // {
// let x =  async () => {
// let y= await setUrl(match.params.collectionId)
//
// console.log(y);
// let resp=  await required.find(x=> x.id=url)
//  setTitle(resp.title)
//  setItems(resp.items)
//  console.log(resp.title);
// }
// x()
//
// // }
// })


  return (




    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>

        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

// const CollectionPage=({collection})=>{
//   console.log(collection);
// return(
//   <div className='category'>
//   <h2>
// CollectionPage
//
//   </h2>
//   </div>)
// }

//ownprops contains all props of CollectionPage

const mapStateToProps = (state,ownProps)=>({
collection:  selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
