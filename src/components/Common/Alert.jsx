import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'

const Alert = ({ classes, error, dismiss }) => {
  const [errorMsg, setErrorMsg] = useState('')
  // timeout hide after 3
  useEffect(() => {
    errorMessage(error)
  }, [error])

  const errorMessage = err => {
    const msg = err.code || err.message
    switch (msg) {
      case 'custom/fields-missing':
        return setErrorMsg('Missing first or last name.')
      case 'custom/fields-too-short':
        return setErrorMsg('First or last name too short.')
      case 'auth/invalid-email':
        return setErrorMsg('Invalid email.')
      case 'auth/email-already-in-use':
        return setErrorMsg('Email already in use.')
      case 'auth/weak-password':
        return setErrorMsg('Password requirements not met')
      default:
        return 'Problem with authentication service.'
    }
  }

  return (
    <div className={classes.root} onClick={() => console.log('dismiss')}>
      <span className={classes.message}>{errorMsg}</span>
      {/* <button className={classes.dismiss} type="button" onClick={() => dismiss}>
        X
      </button> */}
      {/* <p>{message}</p> */}
    </div>
  )
}
const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    padding: 8,
    alignSelf: 'center',
  },
  message: {
    padding: '0 8px',
    fontStyle: 'italic',
  },
  dismiss: {
    color: '#FFF',
    // margin: 0,
    // fontStyle: 'italic',
  },
}

export default withStyles(styles)(Alert)
