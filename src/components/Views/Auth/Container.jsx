import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'
import {
  signUp,
  signIn,
  signInAuth,
  triggerAuthError,
} from 'store/actions/authActions'
import Default from 'components/Views/Auth/Default'
import SignInForm from 'components/Views/Auth/SignInForm'
import SignUpForm from 'components/Views/Auth/SignUpForm'

function Container({
  classes,
  signUp,
  signIn,
  signInAuth,
  signingIn,
  triggerAuthError,
}) {
  const [formShow, setFormShow] = useState(undefined)
  const cancel = () => setFormShow(undefined)
  const handleSignIn = user => {
    console.log(user)

    // sign in user
  }

  const handleSignUp = user => {
    signUp(user)
  }

  const handleAuthSign = user => {
    console.log(user)

    // sign in or sign up user with firebase
  }

  const showBody = () => {
    switch (formShow) {
      case 'signin':
        return (
          <SignInForm
            handleSignIn={handleSignIn}
            handleAuthSign={handleAuthSign}
            // signingIn={signingIn}
            triggerAuthError={triggerAuthError}
            cancel={cancel}
          />
        )
      case 'signup':
        return (
          <SignUpForm
            handleSignUp={handleSignUp}
            handleAuthSign={handleAuthSign}
            // signingIn={signingIn}
            triggerAuthError={triggerAuthError}
            cancel={cancel}
          />
        )
      default:
        return <Default setFormShow={setFormShow} />
    }
  }

  return <div className={classes.root}>{showBody()}</div>
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },
  link: {
    color: '#fdab27',
    fontSize: '1rem',
    fontStyle: 'oblique',
    fontWeight: 'bold',
  },
}

const mapStateToProps = state => {
  return {
    authMessage: state.auth.authMessage,
    authError: state.auth.authError,
    signingIn: state.auth.signingIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
    signIn: user => dispatch(signIn(user)),
    signInAuth: () => dispatch(signInAuth()),
    triggerAuthError: error => dispatch(triggerAuthError(error)),
  }
}
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
)
