import React from 'react'

import {connect} from 'react-redux'
import {compose} from 'redux'
import { createStructuredSelector } from 'reselect'


import {selectCollectionFetching} from '../../redux/shop/shop-selectors'
import WithSpinner from '../with-spinner/with-spinner'
import CollectionsOverview from './collections-overview'


const mapStateToProps=createStructuredSelector({
  isLoading:selectCollectionFetching
})

// const CollectionsOverviewContainer=connect(mapStateToProps)(WithSpinner(CollectionsOverview))

 const CollectionsOverviewContainer=compose(
   connect(mapStateToProps),
   WithSpinner
 )(CollectionsOverview)
// R to L

export default CollectionsOverviewContainer
