import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import { validate } from 'helpers/validator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const INIT_STATE = {
  email: '',
  password: '',
}

function SignInForm({
  classes,
  handleAuthSign,
  handleSignIn,
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
      setSubmitting(false)
    } else if (submitting && !hasErrors) {
      handleSignIn(values)
      setSubmitting(false)
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
      fname: 'null',
      lname: 'null',
      email: data.get('email'),
      password: data.get('password'),
    }
    setErrors(validate(user))
    setSubmitting(true)
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
            className={`${classes.input} ${errors.email && classes.error}`}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className={classes.label}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            className={`${classes.input} ${errors.password && classes.error}`}
            onChange={handleChange}
            // icon to show PW value
          />
        </label>
        <Button
          type="submit"
          disabled={missingFields || submitting || signingIn}
        >
          <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
          Sign in with Email
        </Button>
        <Button type="button" disabled={signingIn} onClick={handleAuthSign}>
          <FontAwesomeIcon icon={faGoogle} className={classes.icon} />
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
    padding: 8,
    width: 'fit-content',
    alignSelf: 'center',
  },
}

export default withStyles(styles)(SignInForm)
