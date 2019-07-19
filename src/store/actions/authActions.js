import { abbrev, capitalize, lowercase } from 'helpers/strMethods'

export const signIn = user => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  dispatch({ type: 'SIGNIN_TRY' })
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => {
      dispatch({ type: 'SIGNIN_SUCCESS' })
    })
    .catch(err => {
      dispatch({ type: 'SIGNIN_FAIL', payload: err.message })
    })
}

export const signInAuth = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase()
  const firestore = getFirestore()
  const provider = new firebase.auth.GoogleAuthProvider()
  dispatch({ type: 'SIGNIN_TRY' })
  firebase
    .auth()
    // .signInWithRedirect(provider)
    // mobile tunnel has bug
    .signInWithPopup(provider)
    .then(u => {
      firestore
        .collection('users')
        .doc(u.user.uid)
        .get()
        .then(docSnapshot => {
          if (docSnapshot.exists) {
            dispatch({ type: 'SIGNIN_SUCCESS' })
          } else {
            firestore
              .collection('users')
              .doc(u.user.uid)
              .set({
                uid: u.user.uid,
                fname: u.user.displayName.split(' ').shift(),
                lname: u.user.displayName
                  .split(' ')
                  .slice(1)
                  .join(' '),
                email: u.user.email,
                displayName: abbrev(u.user.displayName),
                pollsVoted: [],
                pollsCreated: [],
                pollsActive: [],
                score: 0,
              })
            dispatch({ type: 'SIGNIN_SUCCESS' })
          }
        })
        .catch(err => {
          console.log('Signin popup create profile failed')
          dispatch({ type: 'SIGNIN_FAIL', payload: err.message })
        })
    })
    .catch(err => {
      console.log('Signin popup failed')
      dispatch({ type: 'SIGNIN_FAIL', payload: err.message })
    })
}

export const signUp = user => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const { email, password, fname, lname } = user
  const firebase = getFirebase()
  const firestore = getFirestore()
  dispatch({ type: 'SIGNUP_TRY' })
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(u =>
      firestore
        .collection('users')
        .doc(u.user.uid)
        .set({
          uid: u.user.uid,
          fname: capitalize(fname),
          lname: capitalize(lname),
          email: lowercase(email),
          displayName: abbrev(`${fname} ${lname}`),
          pollsVoted: [],
          pollsCreated: [],
          pollsActive: [],
          score: 0,
        })
        .then(() => {
          console.log('user created')
          dispatch({ type: 'SIGNUP_SUCCESS' })
        })
        .catch(err => {
          console.log('user create err')
          console.log(err)
          dispatch({ type: 'SIGNUP_FAIL', payload: err.message })
        })
    )
    .catch(err => {
      console.log('fb create fail')
      dispatch({ type: 'SIGNUP_FAIL', payload: err.message })
    })
}

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
    .catch(err => {
      dispatch({ type: 'SIGNOUT_FAIL', payload: err.message })
    })
}

export const triggerAuthError = error => (dispatch, getState) => {
  console.log('action', error)
  dispatch({ type: 'SIGNUP_FAIL', payload: error })
}
