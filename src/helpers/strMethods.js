export const capitalize = str => {
  if (typeof str !== 'string') return
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
}

export const lowercase = str => {
  if (typeof str !== 'string') return
  return str.toLowerCase()
}

export const titleCase = str => {
  const ommit = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'nor',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
    'via',
  ]
  // set case for ommit strings
  if (typeof str !== 'string') return
  return str
    .split(' ')
    .map(v => v.charAt(0).toUpperCase() + v.substr(1).toLowerCase())
    .join(' ')
}
