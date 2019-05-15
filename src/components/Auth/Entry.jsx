import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import Default from 'components/Auth/Default'
import Alert from 'components/Common/Alert'
import SignInForm from 'components/Auth/SignInForm'
import SignUpForm from 'components/Auth/SignUpForm'
import app from 'config/firebaseConfig'

function SignIn({ classes }) {
  const [formShow, setFormShow] = useState(undefined)
  const [error, setError] = useState()

  const cancel = () => setFormShow(undefined)

  const handleSignIn = async user => {
    try {
      await app.signin(user).then(() => {
        console.log('worked')
      })
    } catch (err) {
      setError(err)
      setTimeout(() => {
        setError()
      }, 3500)
    }
  }
  const handleSignUp = async user => {
    try {
      await app.register(user).then(() => {
        console.log('it worked')
      })
    } catch (err) {
      setError(err)
      setTimeout(() => {
        setError()
      }, 3500)
    }
  }

  const showBody = () => {
    switch (formShow) {
      case 'signin':
        return <SignInForm handleSignIn={handleSignIn} cancel={cancel} />
      case 'signup':
        return <SignUpForm handleSignUp={handleSignUp} cancel={cancel} />
      default:
        return <Default setFormShow={setFormShow} />
    }
  }

  return (
    <div className={classes.root}>
      {showBody()}
      {error && <Alert error={error} />}
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

export default withStyles(styles)(SignIn)
