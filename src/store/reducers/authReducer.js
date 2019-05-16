const initState = {
  authMessage: null,
  signingIn: false,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authMessage: 'Welcome back!',
        signingIn: false,
      }
    case 'SIGNIN_FAIL':
      return {
        ...state,
        authMessage: 'Signin failed',
        signingIn: false,
      }
    case 'SIGNOUT_SUCCESS':
      return {
        state,
        authMessage: 'Successfully signed out!',
      }
    case 'SIGNOUT_FAIL':
      return {
        ...state,
        authMessage: 'Signout failed',
      }
    case 'SIGNIN_TRY':
      return {
        ...state,
        authMessage: 'Signing in',
        signingIn: true,
      }
    default:
      return state
  }
}

export default authReducer
