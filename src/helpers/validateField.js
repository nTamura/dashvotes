export const validateInput = str => {
  if (typeof str === 'string' && str.length > 3) {
    return true
  } else return false
}

export const validateGroup = obj => {
  if (typeof obj === 'object') {
    Object.values(obj).forEach(v => {
      // if (!v) return false
      // check for value, length, type
    })
  } else {
    console.log('Helper / validateGroup failed due to param type')
  }
}

export const validatePw = str => {
  if (str.length >= 6) {
    return true
  } else return false
}

export const validateEmail = str => new Date().toDateString()
// const validateField = date => new Date(date * 1000).toDateString()
