import app from 'firebase/app'
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

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore
  }

  async signin({ email, password }) {
    await this.auth.signInWithEmailAndPassword(email, password)
  }

  signinGoogle() {
    //  this.auth.signInWithEmailAndPassword(email, password)
    // this.auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(u => {
    //     console.log('successfully logged in')
    //   })
    //   .catch(err => {
    //     console.log('unable to log in')
    //   })
  }

  async signout() {
    await this.auth.signOut()
  }

  async register({ fname, lname, email, password }) {
    if (!fname || !lname) {
      throw new Error('custom/fields-missing')
    } else if (fname.length < 3 || lname.length < 3) {
      throw new Error('custom/fields-too-short')
    } else {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: `${fname} ${lname.charAt(0)}`,
        fname,
        lname,
        email,
        password,
        createdAt: Date.now(),
      })
    }
  }

  isInit() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  resetPassword = email => this.auth.sendPasswordResetEmail(email)

  updatePassword = password => this.auth.currentUser.updatePassword(password)
}

export default Firebase
