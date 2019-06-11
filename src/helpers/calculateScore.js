const calculateScore = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('calculateScore args must be in an array')
  } else {
    return arr.map(item => (1 + item) * 10).reduce((a, b) => a * b)
  }
}

export default calculateScore
