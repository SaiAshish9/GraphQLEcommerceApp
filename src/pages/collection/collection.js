import React from 'react'
import CollectionItem from '../../components/item/item'


import { connect } from 'react-redux'

import { selectCollection} from '../../redux/shop/shop-selectors'

import './collection.scss'


import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
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
  collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
