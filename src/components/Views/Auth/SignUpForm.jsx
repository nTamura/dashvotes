import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import { validate } from 'helpers/validator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const INIT_STATE = {
  fname: '',
  lname: '',
  email: '',
  password: '',
}

function SignUpForm({
  classes,
  handleSignUp,
  handleAuthSign,
  triggerAuthError,
  signingIn,
  cancel,
}) {
  const [values, setValues] = useState(INIT_STATE)
  const [errors, setErrors] = useState({})
  const [missingFields, setMissingFields] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    checkValues()
  }, [values])

  useEffect(() => {
    const hasErrors = Object.keys(errors).length
    if (submitting && hasErrors) {
      const error = errors[Object.keys(errors)[0]]
      triggerAuthError(error)
    } else if (submitting && !hasErrors) {
      handleSignUp(values)
    }
  }, [errors])

  const checkValues = () => {
    // for disable submit if fields not complete
    const checkHasValue = Object.values(values).every(i => i != '')
    if (checkHasValue) {
      setMissingFields(false)
    } else {
      setMissingFields(true)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

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
    setErrors(validate(user))
    setSubmitting(true)
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
            onChange={handleChange}
            autoComplete="new-password"
            value={values.fname}
            className={`${classes.input} ${errors.fname && classes.error}`}
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
            value={values.lname}
            className={`${classes.input} ${errors.lname && classes.error}`}
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
            value={values.email}
            placeholder="Valid email requried for verification"
            className={`${classes.input} ${errors.email && classes.error}`}
          />
        </label>
        <label htmlFor="password" className={classes.label}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            placeholder="6 character minimum"
            className={`${classes.input} ${errors.password && classes.error}`}
          />
        </label>
        <Button type="submit" disabled={missingFields || signingIn}>
          <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
          Create account
        </Button>
        <Button type="button" disabled={signingIn} onClick={handleAuthSign}>
          <FontAwesomeIcon icon={faGoogle} className={classes.icon} />
          Register with Google
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
    fontSize: '1rem',
    borderColor: '#FFF',
  },
  error: {
    borderColor: '#ff0000',
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
