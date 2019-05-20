// client side form validation

export const validateName = str => {
  if (typeof str === 'string') {
    if (str === '') {
      return 'Field is required'
    } else if (str.length <= 2) {
      return 'Field is too short'
    }
  } else return 'Invalid input'
}

export const validateEmail = email => {
  const match = /\S+@\S+\.\S+/
  if (typeof email === 'string') {
    if (email === '') {
      return 'Field is required'
    } else if (!match.test(email)) {
      return 'Valid email is required'
    } else return email
  } else return 'Invalid input'
}

export const validatePW = pw => {
  if (typeof pw === 'string') {
    if (pw === '') {
      return 'Field is required'
    } else if (pw.length <= 6) {
      return 'Field is too short'
    }
  } else return 'Invalid input'
}
