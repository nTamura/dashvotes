import React from 'react'
import withStyles from 'react-jss'
import logo from 'assets/logo.png'
// import { Alert } from 'reactstrap'

function SignIn({ classes }) {
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />

      <h1>DASHVOTES</h1>
      <p className={classes.text}>
        Please <a className={classes.loginLink}>Log In</a> to continue!
      </p>

      {/* {props.triggerAlert && <Alert color="primary">You have logged out</Alert>} */}
    </div>
  )
}
const styles = {
  root: {
    // textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    margin: 40,
    width: 240,
  },
  text: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },
  loginLink: {
    color: '#ffbb36',
    fontWeight: 'bold',
    fontStyle: 'oblique',
  },
}

export default withStyles(styles)(SignIn)
