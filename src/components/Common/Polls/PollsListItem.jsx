import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function PollItem({ classes, poll, profile, ...props }) {
  const [hasVoted, setHasVoted] = useState(false)
  useEffect(() => {
    checkAlreadyVoted()
  })

  const checkAlreadyVoted = () => {
    profile.pollsVoted.find(item => {
      if (item === poll.pid) {
        setHasVoted(true)
      }
    })
  }

  return (
    <div className={classes.root}>
      <Link
        className={[classes.itemTitle, hasVoted && classes.read].join(' ')}
        to={`poll/${poll.id}`}
      >
        {poll.title}
        {hasVoted && (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={classes.votedCheck}
          />
        )}
      </Link>
      <p>{`${Object.keys(poll.votes).length} votes`}</p>
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
    // fontWeight: 'bolder',
  },
  read: {
    color: 'rgba(255,255,255,0.6)', // fontWeight: 'lighter',
  },
  votedCheck: {
    color: '#fdab27',
    fontSize: '1rem',
    marginLeft: 8,
    verticalAlign: 'middle',
  },
}
export default withStyles(styles)(PollItem)
