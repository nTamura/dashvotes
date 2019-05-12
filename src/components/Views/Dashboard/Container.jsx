import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <h2>Welcome username</h2>
      <p>You currently have X active polls</p>
      <div className={classes.menuList}>
        <Link to="/trending">
          <Button>Trending Polls</Button>
        </Link>
        <Link to="/active">
          <Button>Active Polls</Button>
        </Link>
        <Link to="/create">
          <Button>Create Poll</Button>
        </Link>
        <Link to="/edit">
          <Button>Edit Poll</Button>
        </Link>
        <Link to="/results">
          <Button>Poll Results</Button>
        </Link>
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
}
export default withStyles(styles)(Container)
