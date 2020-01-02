import {takeEvery,takeLatest,call,put,all} from 'redux-saga/effects'
// applied on each and every action
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase'

import {
fetchCollectionSuccess,
fetchCollectionFailure
} from './shop-actions'


import ShopActionTypes  from './shop-types'

export function* fetchCollectionAsync(){
  yield console.log('I am fired');
try{
  const collectionRef=firestore.collection('collections')
  const snapshot=yield collectionRef.get()
  const collectionMap =yield call(convertCollectionsSnapshotToMap,snapshot)
  yield put(fetchCollectionSuccess(collectionMap))
}
catch(e){
yield(fetchCollectionFailure(e.message))
}



// call(func,parameter)

//   collectionRef
//   .get()
//   .then(snapShot => {
//   const collectionsMap= convertCollectionsSnapshotToMap(snapShot)
//   // updateCollections(collectionsMap)
//   dispatch(fetchCollectionSuccess(collectionsMap))
// })
// .catch(e=> dispatch(fetchCollectionFailure(e.message)))

}


export function* fetchCollectionStart(){
  yield takeLatest(
  ShopActionTypes.FETCH_COLLECTIONS_START,
  fetchCollectionAsync
  )
}


export function* shopSagas(){
  yield all([
call(fetchCollectionStart)
  ])
}
