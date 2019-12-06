import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config= {
  apiKey: "AIzaSyCGcIVOZoE2UZIIzGIis1hwM_CZLbJRVKc",
  authDomain: "graphqldb.firebaseapp.com",
  databaseURL: "https://graphqldb.firebaseio.com",
  projectId: "graphqldb",
  storageBucket: "graphqldb.appspot.com",
  messagingSenderId: "226883476148",
  appId: "1:226883476148:web:11e1118a809c91741695e1",
  measurementId: "G-W83BNE3VKB"
};

firebase.initializeApp(config);

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()


provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase;
