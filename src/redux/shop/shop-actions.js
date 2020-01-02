import ShopActionTypes from './shop-types'

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase'

export const fetchCollectionStart=(collectionMap)=>({
  type:ShopActionTypes.FETCH_COLLECTIONS_START})

export const fetchCollectionSuccess = collectionMap =>({
  type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionMap
})


export const fetchCollectionFailure = errorMessage =>({
  type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:errorMessage
})


// export const fetchCollectionStartAsync=()=>{
//   return dispatch =>{
//     const collectionRef=firestore.collection('collections')
//
// dispatch(fetchCollectionStart())
//     collectionRef
//     .get()
//     .then(snapShot => {
//     const collectionsMap= convertCollectionsSnapshotToMap(snapShot)
//     // updateCollections(collectionsMap)
//     dispatch(fetchCollectionSuccess(collectionsMap))
//     // this.setState({loading:false})
//   })
//   .catch(e=> dispatch(fetchCollectionFailure(e.message)))
//   }
// }
