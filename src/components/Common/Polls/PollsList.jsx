import React from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from 'react-jss'
import samples from 'helpers/samples'
import PollsListItem from 'components/Common/Polls/PollsListItem'

function PollsList({ classes, ...props }) {
  const polls = samples
  return (
    <div className={classes.root}>
      <div className={classes.menuList}>
        {polls.map(poll => {
          return <PollsListItem key={poll.id} poll={poll} />
        })}
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
export default withRouter(withStyles(styles)(PollsList))
