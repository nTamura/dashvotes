export const signIn = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch({ type: 'SIGNIN_TRY' })
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        dispatch({ type: 'SIGNIN_SUCCESS' })
      })
      .catch(err => {
        dispatch({ type: 'SIGNIN_FAIL', err })
      })
  }
}

export const signUp = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    console.log('sign up')

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(user.email, user.password)
    //   .then(() => {
    //     dispatch({ type: 'SIGNIN_SUCCESS' })
    //   })
    //   .catch(err => {
    //     dispatch({ type: 'SIGNIN_FAIL', err })
    //   })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('ree')
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      })
      .catch(err => {
        dispatch({ type: 'SIGNOUT_FAIL', err })
      })
  }
}
