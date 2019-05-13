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
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    border: '2px solid #FFF',
    borderRadius: 5,
    padding: 8,
    margin: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: 8,
    padding: '8px 0',
    fontWeight: 'bold',
  },
}
export default withStyles(styles)(Container)
