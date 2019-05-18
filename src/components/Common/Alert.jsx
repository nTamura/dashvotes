import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'

const Alert = ({ classes, authMessage, pollsMessage, dismiss }) => {
  const [alert, setAlert] = useState('custom/fields-missing')
  const message = authMessage || pollsMessage

  useEffect(() => {
    setMessage(message)
  }, [message])

  const setMessage = msg => {
    console.log('Alert:', msg)
    setAlert(msg)
    setTimeout(() => {
      setAlert(null)
      // also update store to clear error
    }, 3500)
  }

  return (
    <>
      {alert && (
        <div className={classes.root}>
          <p className={classes.message}>{alert}</p>
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

const mapStateToProps = state => ({
  authMessage: state.auth.authMessage,
  pollsMessage: state.polls.pollsMessage,
})

export default withStyles(styles)(connect(mapStateToProps)(Alert))
