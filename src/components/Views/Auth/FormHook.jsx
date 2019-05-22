import React, { useState, useEffect } from 'react'
import { validateName, validateEmail, validatePw } from 'helpers/validator'
import { capitalize, lowercase } from 'helpers/strMethods'

function FormHook(initialState, validate) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (submitting) {
      if (!Object.keys(errors).length) {
        console.log('no errors ')
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
  }

  function handleBlur() {
    setErrors(validate(values))
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

    const validationErr = validate(values)
    console.log('handle sumit from hook')
    console.log(values.fname, values.lname)
  }

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    submitting,
    errors,
    values,
  }
}

export default FormHook
