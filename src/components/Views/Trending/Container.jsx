import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import PollsList from 'components/Common/Polls/PollsList'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSortDown } from '@fortawesome/free-solid-svg-icons'

function Container({ classes, ...props }) {
  return (
    <div className={classes.root}>
      <h2>Trending</h2>
      <div className={classes.flex}>
        <p className={classes.subTitle}>Browsing top polls</p>
        <div className={classes.sortContainer}>
          <p className={classes.sortBy}>Sort by</p>
          {/* <FontAwesomeIcon icon={faSortDown} className={classes.icon} /> */}
        </div>
      </div>
      <PollsList />
    </div>
  )
}
const styles = {
  root: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  subTitle: {
    marginTop: 0,
  },
  sortContainer: {
    display: 'flex',
  },
  sortBy: {
    margin: 0,
    // marginTop: 0,
    // float: 'right',
  },
  icon: {},
}
export default withStyles(styles)(Container)
