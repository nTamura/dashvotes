import React from 'react'
import withStyles from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

function Share({ classes, children, ...rest }) {
  return (
    <div className={classes.root}>
      <button className={classes.button}>
        Share this poll
        <FontAwesomeIcon icon={faShare} className={classes.icon} />
      </button>
    </div>
  )
}
const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  button: {
    color: '#FFF',
  },
  icon: {
    marginLeft: 8,
  },
}
export default withStyles(styles)(Share)
