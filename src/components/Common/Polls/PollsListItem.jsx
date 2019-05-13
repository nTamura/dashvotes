import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

function PollItem({ classes, poll, ...props }) {
  // const id = props.match.params.id
  return (
    <div className={classes.root}>
      <Link className={classes.itemTitle} to={`poll/${poll.id}`}>
        {poll.title}
      </Link>
      <p>1150 votes</p>
    </div>
  )
}
const styles = {
  root: {
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
export default withStyles(styles)(PollItem)
