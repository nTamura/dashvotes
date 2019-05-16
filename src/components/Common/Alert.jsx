import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'

const Alert = ({ classes, authMessage, dismiss }) => {
  const [alert, setAlert] = useState('custom/fields-missing')
  // timeout hide after 3
  useEffect(() => {
    setMessage(authMessage)
  }, [authMessage])

  const setMessage = msg => {
    console.log('Alert:', msg)
    setAlert(msg)
    setTimeout(() => {
      setAlert(null)
      // also update store to clear error
    }, 3500)

    //   switch (err) {
    //     case 'custom/fields-missing':
    //       return setErrorMsg('Missing first or last name.')
    //   }
    // const msg = err.code || err.message
    // switch (msg) {
    //   case 'custom/fields-missing':
    //     return setErrorMsg('Missing first or last name.')
    //   case 'custom/fields-too-short':
    //     return setErrorMsg('First or last name too short.')
    //   case 'auth/invalid-email':
    //     return setErrorMsg('Invalid email.')
    //   case 'auth/email-already-in-use':
    //     return setErrorMsg('Email already in use.')
    //   case 'auth/weak-password':
    //     return setErrorMsg('Password requirements not met')
    //   default:
    //     return 'Problem with authentication service.'
    // }
  }

  return (
    <>
      {alert && (
        <div className={classes.root}>
          <p className={classes.message} onClick={() => console.log('dismiss')}>
            {alert}
          </p>
        </div>
      )}
    </>
  )
}
const styles = {
  root: {
    zIndex: 100,
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    alignSelf: 'center',
  },
  message: {
    padding: 8,
    margin: 0,
    fontStyle: 'italic',
  },
  // dismiss: {
  // color: '#FFF',
  // margin: 0,
  // fontStyle: 'italic',
  // },
}

const mapStateToProps = state => {
  return {
    authMessage: state.auth.authMessage,
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Alert))
