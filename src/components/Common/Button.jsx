import React from 'react'
import withStyles from 'react-jss'

function Button({ classes, children, ...rest }) {
  return (
    <button type="button" className={classes.root} {...rest}>
      {children}
    </button>
  )
}
const styles = {
  root: {
    fontSize: '1rem',
    margin: '8px 0 16px',
    border: '2px solid #FFF',
    borderRadius: 5,
    padding: 8,
    textAlign: 'center',
    width: '100%',
    '&:disabled': {
      color: '#c7c7c7',
      border: '2px solid #c7c7c7',
    },
  },
}
export default withStyles(styles)(Button)
