import React, { useState } from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import { signIn } from 'store/actions/authActions'
import { connect } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'

function SignInForm({ classes, signingIn, signIn, cancel }) {
  // const { email, setEmail } = useState('')
  // const { password, setPassword } = useState('')
  // const { input, setInput } = useState()

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const template = {
      email: data.get('email'),
      password: data.get('password'),
    }
    signIn(template)
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
          Sign in with Email
        </Button>
        <Button type="submit" disabled={signingIn}>
          Sign in with Google
        </Button>
      </form>
      <button type="button" onClick={cancel} className={classes.cancel}>
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
  cancel: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '1rem',
    color: '#FFF',
    padding: 8,
  },
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    signingIn: state.auth.signingIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch(signIn(user)),
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignInForm)
)
