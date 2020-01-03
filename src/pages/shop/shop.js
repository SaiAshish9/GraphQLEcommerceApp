import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import {withRouter} from 'react-router-dom'

// import { createStructuredSelector } from 'reselect'

import { fetchCollectionStart} from '../../redux/shop/shop-actions'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'

import CollectionPageContainer from '../collection/collection-container'

// import { firestore,convertCollectionsSnapshotToMap }  from '../../firebase/firebase'

import {selectCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop-selectors'

import { updateCollections } from '../../redux/shop/shop-actions'

import WithSpinner from '../../components/with-spinner/with-spinner'



// const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner=WithSpinner(CollectionPage)




class ShopPage extends React.Component {

// constructor(){
//   super()
//   this.state={
//
//   }
// }
state={
  loading:true
}

  unsubscribeFromSnapshot=null;


  componentDidMount(){

//     const {updateCollections} =this.props
// const collectionRef=firestore.collection('collections')
// //whenever collection ref updates or executes first time
// // this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapShot=>{
//
// // fetch(https://firestore.googleapis.com/v1/projects/graphqldb/databases/(default)/documents/collections)
// // .then(res=>res.json())
// // .then(collections=>
// // console.log(collections))
//
// collectionRef.get().then(snapShot => {
// const collectionsMap= convertCollectionsSnapshotToMap(snapShot)
// updateCollections(collectionsMap)
// this.setState({loading:false})
// })



const {fetchCollectionStart} =this.props
fetchCollectionStart();

  }



render(){
const { match } = this.props
const { loading } =this.state
  return(
    <div className='shop-page'>
  <Route
  exact path={`${match.path}`}
  component={CollectionsOverviewContainer}
  />
  <Route
  path={`${match.path}/:collectionId`}
component ={CollectionPageContainer}
  />
     </div>
  )

}


}
// render={props=><CollectionPageWithSpinner isLoading={!isCollectionsLoaded } {...props}/>}

// render={props=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}
//
// const mapStateToProps=createStructuredSelector({
//   // isCollectionFetching:selectCollectionFetching,
//   // isCollectionsLoaded:selectIsCollectionsLoaded
// })


const mapDispatchToProps=dispatch=>({
  fetchCollectionStart:()=>dispatch(fetchCollectionStart())
// updateCollections:collectionsMap=>
//   dispatch(updateCollections(collectionsMap))
})

export default withRouter(connect(null,mapDispatchToProps)(ShopPage))
