import React from 'react'
import withStyles from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = ({ classes }) => (
  <div style={styles.root}>
    <FontAwesomeIcon spin className={classes.icon} icon={faSpinner} />
    <p>Loading...</p>
  </div>
)
const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40%',
  },
  icon: {
    fontSize: '4rem',
    marginBottom: 40,
  },
}

export default withStyles(styles)(Loading)
