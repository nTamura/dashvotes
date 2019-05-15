import React from 'react'
import { withRouter } from 'react-router-dom'
import withStyles from 'react-jss'
import PollsListItem from 'components/Common/Polls/PollsListItem'

import { connect } from 'react-redux'

function PollsList({ classes, ...props }) {
  const { polls } = props
  return (
    <div className={classes.root}>
      <div className={classes.menuList}>
        {polls &&
          polls.map(poll => {
            return <PollsListItem key={poll.id} />
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

const mapStateToProps = state => ({ polls: state.polls.polls })

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(PollsList))
)
