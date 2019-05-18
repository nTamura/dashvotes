import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import PollsList from 'components/Common/Polls/PollsList'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <h2>Poll Results</h2>
      <hr />
      <h3>Active Polls</h3>
      <PollsList />

      <h3>Expired Polls</h3>
      <PollsList />
    </div>
  )
}
const styles = {
  root: {},
}
export default withStyles(styles)(Container)
