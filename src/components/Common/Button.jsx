import React from 'react'
import withStyles from 'react-jss'

function Button({ classes, children, ...rest }) {
  return (
    <button {...rest} className={classes.button}>
      {children}
    </button>
  )
}
const styles = {
  button: {
    border: '2px solid #FFF',
    borderRadius: 5,
    color: '#FFF',
    padding: 8,
    marginBottom: 8,
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
}
export default withStyles(styles)(Button)
