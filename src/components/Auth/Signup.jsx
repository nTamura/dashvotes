import React from 'react'
import withStyles from 'react-jss'
import SignUpForm from 'components/Auth/SignUpForm'

function SignUp({ classes }) {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const template = {
      fname: data.get('fname'),
      lname: data.get('lname'),
      email: data.get('email'),
      password: data.get('password'),
      createdAt: Date.now(),
    }
    console.table('SignUp', template)
    // ...post to db, fireRedirect
  }
  return (
    <div className={classes.root}>
      <h2>Sign Up</h2>
      <p>Signing up is quick and easy.</p>

      <SignUpForm handleSubmit={handleSubmit} />
    </div>
  )
}
const styles = {
  root: {
    // textAlign: 'center',
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

export default withStyles(styles)(SignUp)
