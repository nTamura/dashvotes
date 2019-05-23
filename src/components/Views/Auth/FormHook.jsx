import React, { useState, useEffect } from 'react'
// import { validateFields } from 'helpers/validator'
import { capitalize, lowercase } from 'helpers/strMethods'

function FormHook(initialState, validateFields) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    if (submitting) {
      if (!Object.keys(errors).length) {
        console.log('registering', values.fname, values.lname, values.email)
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  function handleChange(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })

    const checkHasValue = Object.values(values).every(i => i.length)

    if (checkHasValue) {
      console.log('has')

      setHasValue(true)
    } else {
      console.log('doesnt ')
      console.log(values)

      setHasValue(false)
    }
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
