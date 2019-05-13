import React from 'react'
import withStyles from 'react-jss'

function Input({ classes, children, ...rest }) {
  return (
    <label htmlFor="description" className={classes.label}>
      Description
      <input
        type="text"
        placeholder="Provide optional context"
        name="description"
        id="description"
        className={classes.input}
      />
    </label>
  )
}
const styles = {
  root: {},
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
    border: 'none',
    fontSize: '1rem',
  },
}
export default withStyles(styles)(Input)
