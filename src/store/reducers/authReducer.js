const initState = {
  authMessage: null,
  signingIn: false,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_TRY':
      return {
        authMessage: 'Signing in',
        signingIn: true,
      }
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
    case 'SIGNUP_TRY':
      return {
        authMessage: 'Creating account',
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authMessage: 'Account created!',
      }
    case 'SIGNUP_FAIL':
      return {
        ...state,
        authMessage: action.payload,
        signingIn: false,
      }
    case 'SIGNOUT_SUCCESS':
      return {
        state,
        authMessage: 'Successfully signed out',
        signingIn: false,
      }
    case 'SIGNOUT_FAIL':
      return {
        ...state,
        authMessage: 'Signout failed',
      }
    default:
      return state
  }
}

export default authReducer
