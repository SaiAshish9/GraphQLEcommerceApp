import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config= {
  apiKey: "",
  authDomain: "graphqldb.firebaseapp.com",
  databaseURL: "https://graphqldb.firebaseio.com",
  projectId: "graphqldb",
  storageBucket: "graphqldb.appspot.com",
  messagingSenderId: "226883476148",
  appId: "1:226883476148:web:11e1118a809c91741695e1",
  measurementId: "G-W83BNE3VKB"
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
