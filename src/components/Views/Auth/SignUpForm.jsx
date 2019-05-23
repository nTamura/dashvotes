import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import { capitalize, lowercase } from 'helpers/strMethods'
import { validateFields } from 'helpers/validator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import FormHook from 'components/Views/Auth/FormHook'

const INIT_STATE = {
  fname: '',
  lname: '',
  email: '',
  password: '',
}

function SignUpForm({
  classes,
  handleSignUp,
  // handleSubmit,
  triggerAuthError,
  signingIn,
  authProvider,
  cancel,
}) {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    submitting,
    errors,
    hasValue,
    values,
  } = FormHook(INIT_STATE, validateFields, triggerAuthError)
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const form = e.target
  //   const data = new FormData(form)
  //   const user = {
  //     fname: capitalize(data.get('fname')),
  //     lname: capitalize(data.get('lname')),
  //     email: lowercase(data.get('email')),
  //     password: data.get('password'),
  //   }
  //   console.log(user)
  //   // handleSignUp(user)
  // }

  // const handleForm = e => {
  //   let err = {}
  //   e.preventDefault()
  //   const form = e.target
  //   const data = new FormData(form)
  //   const user = {
  //     fname: capitalize(data.get('fname')),
  //     lname: capitalize(data.get('lname')),
  //     email: lowercase(data.get('email')),
  //     password: data.get('password'),
  //   }
  //   console.log(user)
  // }

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
            onChange={handleChange}
            autoComplete="new-password"
            // onBlur={handleBlur}
            value={values.fname}
            className={classes.input}
          />
        </label>
        <label htmlFor="lname" className={classes.label}>
          Last name
          <input
            type="text"
            name="lname"
            id="lname"
            onChange={handleChange}
            autoComplete="new-password"
            // onBlur={handleBlur}
            value={values.lname}
            className={classes.input}
          />
        </label>

        <label htmlFor="email" className={classes.label}>
          Email
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            autoComplete="new-password"
            // onBlur={handleBlur}
            value={values.email}
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
            onChange={handleChange}
            // onBlur={handleBlur}
            value={values.password}
            placeholder="6 character minimum"
            className={classes.input}
          />
        </label>
        <Button type="submit" disabled={!hasValue || signingIn}>
          <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
          Create account
        </Button>
        <Button type="button" disabled={signingIn} onClick={authProvider}>
          <FontAwesomeIcon icon={faGoogle} className={classes.icon} />
          Register with Google
        </Button>
      </form>
      <button type="button" onClick={cancel} className={classes.cancel}>
        Cancel
      </button>
      <pre>{JSON.stringify({ errors }, null, 2)}</pre>
      <pre>{}</pre>
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
  icon: {
    float: 'left',
  },
  cancel: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '1rem',
    color: '#FFF',
    padding: 8,
  },
}

export default withStyles(styles)(SignUpForm)
