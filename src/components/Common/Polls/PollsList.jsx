import React from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from 'react-jss'
import PollsListItem from 'components/Common/Polls/PollsListItem'

function PollsList({ classes, polls, ...props }) {
  return (
    <div className={classes.root}>
      {polls.length === 0 && (
        <div className={classes.errorContainer}>
          <p>Sorry, there is currently nothing here.</p>
          <p>
            There may be a problem with the database, or there are currently no
            polls posted. Just be calm and stop freaking out.
          </p>
        </div>
      )}
      <div className={classes.menuList}>
        {polls.map(poll => (
          <PollsListItem key={poll.id} poll={poll} />
        ))}
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
  errorContainer: {
    textAlign: 'center',
    marginTop: '45%',
  },
}

export default withRouter(withStyles(styles)(PollsList))
