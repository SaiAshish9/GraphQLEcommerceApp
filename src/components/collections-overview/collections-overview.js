import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import {selectCollections} from '../../redux/shop/shop-selectors'


import CollectionPreview  from '../preview/preview'

import './collections-overview.scss'


const CollectionsOverview=({collections})=>(
<div className='collections-overview'>
{
  collections.map(({id,...other}) =>(
    <CollectionPreview key={id} {...other}  />
  ))
}
</div>
)

const mapStateToProps = createStructuredSelector({
  collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
