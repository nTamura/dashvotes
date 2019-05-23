import React, { useState, useEffect } from 'react'
// import { validateFields } from 'helpers/validator'
import { capitalize, lowercase } from 'helpers/strMethods'

function FormHook(initialState, validateFields, triggerAuthError) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    checkErrors()
    if (errors) {
      console.log(Object.entries(errors)[0])
      // const error = Object.entries(errors)[0]
      // console.log(error)
      // triggerAuthError(error)
    }
  }, [errors])

  useEffect(() => {
    checkValues()
  }, [values])

  const checkErrors = () => {
    if (submitting) {
      if (!Object.keys(errors).length) {
        console.log('registering', values.fname, values.lname, values.email)
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }

  const checkValues = () => {
    const checkHasValue = Object.values(values).every(i => i != '')
    if (checkHasValue) {
      setHasValue(true)
    } else {
      setHasValue(false)
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  function handleBlur() {
    // const validationErrors = validateFields(values)
    // console.log(validationErrors)
    // setErrors(validationErrors)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const user = {
      fname: capitalize(data.get('fname')),
      lname: capitalize(data.get('lname')),
      email: lowercase(data.get('email')),
      password: data.get('password'),
    }
    setErrors(validateFields(user))
    setSubmitting(true)
  }

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    submitting,
    errors,
    values,
    hasValue,
  }
}

export default FormHook
