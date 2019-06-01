import React from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from 'react-jss'
import PollsListItem from 'components/Common/Polls/PollsListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry } from '@fortawesome/free-solid-svg-icons'

function PollsList({ classes, polls, ...props }) {
  return (
    <div className={classes.root}>
      {polls.length >= 1 ? (
        <div className={classes.menuList}>
          {polls.map(poll => (
            <PollsListItem key={poll.id} poll={poll} />
          ))}
        </div>
      ) : (
        <div className={classes.errorContainer}>
          <FontAwesomeIcon className={classes.icon} icon={faSadCry} />
          <p>Sorry, there are currently no polls.</p>
        </div>
      )}
    </div>
  )
}
const styles = {
  root: {},
  icon: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: '3rem',
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  errorContainer: {
    textAlign: 'center',
    marginTop: '45%',
  },
}

export default withRouter(withStyles(styles)(PollsList))
