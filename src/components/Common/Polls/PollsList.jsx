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
export default withRouter(withStyles(styles)(PollsList))
