// client side form validation

export const validateFields = values => {
  // const { fname, lname, email, password } = values
  let errors = {}

  // name validate
  if (!values.fname) {
    errors.fname = 'Field is required'
  }
  if (!values.lname) {
    errors.lname = 'Field is required'
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
  } else if (values.password.length <= 6) {
    errors.password = 'Field is too short'
  }

  return errors
}

// export const validateName = str => {
//   let err = {}
//   if (typeof str === 'string') {
//     if (str === '') {
//       return 'Field is required'
//     } else if (str.length <= 2) {
//       return 'Field is too short'
//     }
//   } else return 'Invalid input'
// }

// export const validateEmail = email => {
//   let err = {}
//   const match = /\S+@\S+\.\S+/
//   if (typeof email === 'string') {
//     if (email === '') {
//       err.email = 'Field is required'
//     } else if (!match.test(email)) {
//       err.email = 'Valid email is required'
//     } else return email
//   } else return 'Invalid input'
// }

// export const validatePW = pw => {
//   let err = {}
//   if (typeof pw === 'string') {
//     if (pw === '') {
//       return 'Field is required'
//     } else if (pw.length <= 6) {
//       return 'Field is too short'
//     }
//   } else return 'Invalid input'
// }
