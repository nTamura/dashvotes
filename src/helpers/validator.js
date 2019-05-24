// client side form validation

export const validateFields = values => {
  let errors = {}

  // name validate
  if (!values.fname) {
    errors.fname = 'Field is required'
  } else if (values.fname.length < 2) {
    errors.fname = 'Field is too short'
  }
  if (!values.lname) {
    errors.lname = 'Field is required'
  } else if (values.lname.length < 2) {
    errors.lname = 'Field is too short'
  }

  // email validate
  const match = /\S+@\S+\.\S+/

  if (!values.email) {
    errors.email = 'Field is required'
  } else if (!match.test(values.email)) {
    errors.email = 'Valid email is required'
  }

  // password validate
  if (!values.password) {
    errors.password = 'Field is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password is too short'
  }

  return errors
}
