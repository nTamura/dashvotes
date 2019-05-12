import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <h2>Welcome username</h2>
      <p>You currently have X active polls</p>
      <div className={classes.menuList}>
        <Link className={classes.button}>Trending Polls</Link>
        <Link className={classes.button}>Active Polls</Link>
        <Link className={classes.button}>Create Poll</Link>
        <Link className={classes.button}>Edit Poll</Link>
        <Link className={classes.button}>Poll Results</Link>
      </div>
    </div>
  )
}
const styles = {
  root: {},
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    border: '1px solid #FFF',
    padding: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
}
export default withStyles(styles)(Container)
