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
    fontSize: '1.2rem',
    border: '2px solid #FFF',
    borderRadius: 5,
    color: '#FFF',
    padding: 8,
    margin: '8px 0',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
}
export default withStyles(styles)(Button)
