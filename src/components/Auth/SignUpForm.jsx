import React from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import { connect } from 'react-redux'
import { signUp } from 'store/actions/authActions'

function SignUpForm({ classes, signUp, cancel }) {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const user = {
      fname: data.get('fname'),
      lname: data.get('lname'),
      email: data.get('email'),
      password: data.get('password'),
    }
    signUp(user)
  }

  return (
    <>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} className={classes.root}>
        <label htmlFor="fname" className={classes.label}>
          First name
          <input
            type="text"
            name="fname"
            id="fname"
            className={classes.input}
          />
        </label>
        <label htmlFor="lname" className={classes.label}>
          Last name
          <input
            type="text"
            name="lname"
            id="lname"
            className={classes.input}
          />
        </label>

        <label htmlFor="email" className={classes.label}>
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Valid email requried for verification"
            className={classes.input}
          />
        </label>

        <label htmlFor="password" className={classes.label}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="6 character minimum"
            className={classes.input}
          />
        </label>

        <Button type="submit">Create</Button>
      </form>
      <button type="button" onClick={cancel} className={classes.cancel}>
        Cancel
      </button>
    </>
  )
}
const styles = {
  root: {
    width: '100%',
  },
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpForm)
)
