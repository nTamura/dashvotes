import React from 'react'
import withStyles from 'react-jss'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.button}>button</div>
      <div className={classes.button}>button</div>
      <div className={classes.button}>button</div>
    </div>
  )
}
const styles = {
  root: {},
  button: {
    border: '1px solid #FFF',
    padding: 8,
    textAlign: 'center',
  },
}
export default withStyles(styles)(Container)
