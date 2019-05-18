import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'dashvotes.firebaseapp.com',
  databaseURL: 'https://dashvotes.firebaseio.com',
  projectId: 'dashvotes',
  storageBucket: 'dashvotes.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

firebase.initializeApp(config)

export default firebase
