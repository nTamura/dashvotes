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
    // fontSize: '1.2rem',
    fontSize: '1rem',
    margin: '8px 0 16px',
    // marginBottom: 16,
    border: '2px solid #FFF',
    borderRadius: 5,
    color: '#FFF',
    padding: 8,
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
}
export default withStyles(styles)(Button)
