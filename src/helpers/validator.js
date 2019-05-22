// client side form validation

export const validateFields = values => {
  const { fname, lname, email, password } = values
  let err = {}

  // name validate
  if (!fname) {
    err.fname = 'Field is required'
  }
  if (!lname) {
    err.lname = 'Field is required'
  }

  // email validate
  const match = /\S+@\S+\.\S+/

  if (!email) {
    err.email = 'Field is required'
  } else if (!match.test(email)) {
    err.email = 'Valid email is required'
  }

  // password validate
  if (!password) {
    err.password = 'Field is required'
  } else if (password.length <= 6) {
    err.password = 'Field is too short'
  }
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
