export const capitalize = str => {
  if (typeof str !== 'string') return
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
}

export const lowercase = str => {
  if (typeof str !== 'string') return
  return str.toLowerCase()
}

export const titleCase = str => {
  // need a case for letter 'a'
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
    'the',
    'in',
    'is',
    'of',
    'on',
    'per',
    'to',
    'via',
  ]
  if (typeof str !== 'string') {
    return
  }

  const firstWord = str.split(' ')[0]

  return str
    .split(' ')
    .map(word => {
      if (word !== firstWord && ommit.includes(word)) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      }
    })
    .join(' ')
}

export const abbrev = name => {
  const n = name.split(' ')
  let fname = n.shift()
  fname = fname.charAt(0).toUpperCase() + fname.toLowerCase().slice(1)
  const lname = n.map(s => s.charAt(0).toUpperCase()).join(' ')
  return `${fname} ${lname}`
}
