import React, { useState } from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'

function SignInForm({ classes, handleSignIn, cancel }) {
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
    handleSignIn(template)
  }

  // const handleInputChange = e => {
  //   setInput({ [e.target.name]: e.target.value })
  // }
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
            // onChange={handleInputChange}
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
          />
        </label>

        <Button type="submit">Sign in with Email</Button>
        <Button type="submit">Sign in with Google</Button>
      </form>
      <button onClick={() => cancel()} className={classes.cancel}>
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
    marginTop: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#FFF',
  },
}
export default withStyles(styles)(SignInForm)
