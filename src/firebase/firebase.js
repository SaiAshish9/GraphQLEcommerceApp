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

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()


provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase;
