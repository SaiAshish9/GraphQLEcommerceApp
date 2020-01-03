import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config= {

};


export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if(!userAuth){
    return
  }


const userRef=  firestore.doc(`users/${userAuth.uid}`);

const snapShot =await userRef.get()

if(!snapShot.exists){
  const {displayName,email}= userAuth;
  const createdAt=new Date();

try{
await userRef.set({
  displayName,
  email,
  createdAt,
  ...additionalData
})


}catch(e){
console.log('error',e.message);
}

}
return userRef
// console.log(snapShot);
}




firebase.initializeApp(config);



export const convertCollectionsSnapshotToMap= (collections) =>{
  const transformedCollection = collections.docs.map(doc =>{
    const {title,items} = doc.data()

    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })


return transformedCollection.reduce((acc,next)=>{
  acc[next.title.toLowerCase()]=next;
  return acc
},{})
  // console.log(transformedCollection);
}



export const addCollectionAndItems= async (collectionKey,objectsToAdd)=>{
  const collectionRef=firestore.collection(collectionKey)

const batch=firestore.batch()

objectsToAdd.forEach(obj => {
const newDocRef = collectionRef.doc()
// .doc('obj.title')
// console.log(newDocRef);

batch.set(newDocRef,obj)
}
)




return await batch.commit()
}


export const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe()
      resolve(userAuth)
    },reject)
  })
}


export const auth=firebase.auth()
export const firestore=firebase.firestore()

export const googleProvider=new firebase.auth.GoogleAuthProvider()


googleProvider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider)

export default firebase;
