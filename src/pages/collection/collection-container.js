import {connect} from 'react-redux'

import {compose} from 'redux'

import {selectIsCollectionsLoaded} from '../../redux/shop/shop-selectors'

import { createStructuredSelector} from 'reselect'


import WithSpinner from '../../components/with-spinner/with-spinner'

import CollectionPage from './collection'

const mapStateToProps= createStructuredSelector({
  isLoading:state => selectIsCollectionsLoaded(state)
})

const CollectionPageContainer=compose(
  connect(mapStateToProps),
WithSpinner
)(CollectionPage)
export default CollectionPageContainer
