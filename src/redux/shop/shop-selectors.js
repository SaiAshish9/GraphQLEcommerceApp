import { createSelector } from 'reselect'
import DATA from './data'

const COLLECTION_ID_MAP={
  hats:1,
  sneakers:2,
  jackets:3,
  mens:5
}


const selectShop = state => state.shop


export const selectCollections = createSelector(
  [selectShop],
  shop=> shop.collections
)

// export const selectCollection = collectionUrlParam =>
// createSelector(
//
//   [selectCollections],
//   collections => collections[collectionUrlParam]
//   // DATA=>DATA.find(collection => collection.id === 1)
//
//   // collections=>collections.find(collection => collection.id === 1 )
//
//   // collections=>(collections?collections[collectionUrlParam]:null)
// )

// collections=>collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] )


export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections=>collections ? Object.keys(collections).map(key => collections[key]) : []
);


export const selectCollection =createSelector(
    [selectCollections],
    collections =>collections? Object.keys(collections).map(key => collections[key]):[]
  );

export const selectCollectionFetching=createSelector(
  [selectShop],
  shop=>shop.isFetching
)


export const selectIsCollectionsLoaded=createSelector(
  [selectShop],
  shop => !!shop.collections
  //!!{} true
  // !!0 !!null false
)
