import React from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function SignInForm({
  classes,
  signingIn,
  authProvider,
  handleSignIn,
  cancel,
}) {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const template = {
      email: data.get('email'),
      password: data.get('password'),
    }
    handleSignIn(template)
  }

  return (
    <>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit} className={classes.root}>
        <label htmlFor="email" className={classes.label}>
          Email
          <input
            type="text"
            name="email"
            id="email"
            type="email"
            className={classes.input}
          />
        </label>

        <label htmlFor="password" className={classes.label}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            className={classes.input}
            // onChange={handleInputChange}
            // icon to show PW value
          />
        </label>

        <Button type="submit" disabled={signingIn}>
          <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
          Sign in with Email
        </Button>
        <Button type="button" disabled={signingIn} onClick={authProvider}>
          <FontAwesomeIcon icon={faGoogle} className={classes.icon} />
          Sign in with Google
        </Button>
      </form>
      <button
        type="button"
        onClick={cancel}
        disabled={signingIn}
        className={classes.cancel}
      >
        Cancel
      </button>
    </>
  )
}
const styles = {
  root: { width: '100%' },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
    border: 'none',
    fontSize: '1rem',
  },
  icon: {
    float: 'left',
  },
  cancel: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '1rem',
    padding: 8,
    width: 'fit-content',
    alignSelf: 'center',
  },
}

export default withStyles(styles)(SignInForm)
