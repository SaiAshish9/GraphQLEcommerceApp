import React from 'react'

import { connect } from 'react-redux'

import { compose } from 'redux';

import { createStructuredSelector } from 'reselect'

import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors'


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
  collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
