import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom'
import Default from 'components/Views/Auth/Default'
import Alert from 'components/Common/Alert'
import SignInForm from 'components/Views/Auth/SignInForm'
import SignUpForm from 'components/Views/Auth/SignUpForm'
// import app from 'config/firebaseConfig'

import { connect } from 'react-redux'
import { signUp, signIn, signInAuth } from 'store/actions/authActions'

function Container({
  classes,
  location,
  signUp,
  signIn,
  signInAuth,
  signingIn,
}) {
  const [formShow, setFormShow] = useState(undefined)
  // const [error, setError] = useState()

  const cancel = () => setFormShow(undefined)
  const authProvider = () => {
    signInAuth()
  }
  const handleSignIn = user => {
    try {
      console.log('trying')

      signIn(user)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSignUp = user => {
    try {
      signUp(user)
      console.log('it worked')
    } catch (err) {
      console.log('Err', err)

      // setError(err)
      // setTimeout(() => {
      //   setError()
      // }, 3500)
    }
  }

  const showBody = () => {
    switch (formShow) {
      case 'signin':
        return (
          <SignInForm
            handleSignIn={handleSignIn}
            authProvider={authProvider}
            signingIn={signingIn}
            cancel={cancel}
          />
        )
      case 'signup':
        return (
          <SignUpForm
            handleSignUp={handleSignUp}
            authProvider={authProvider}
            signingIn={signingIn}
            cancel={cancel}
          />
        )
      default:
        return <Default setFormShow={setFormShow} />
    }
  }

  return (
    <div className={classes.root}>
      {showBody()}
      {/* {error && <Alert error={error} />} */}
    </div>
  )
}
const styles = {
  root: {
    // textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
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
  }
}
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
)
