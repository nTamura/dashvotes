import React from 'react'
import withStyles from 'react-jss'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'

const NotFound = ({ classes, match }) => {
  return (
    <div className={classes.root}>
      <h2>Poll not found</h2>
      <FontAwesomeIcon icon={faHeartBroken} className={classes.icon} />
      <p>
        Sorry, the poll with ID
        <span className={classes.id}>{` ${match.params.id} `}</span>
        cannot be found.
      </p>
      <p>
        Check the poll ID or URL again, otherwise contact support or the poll
        creator.
      </p>
      <p className={classes.centerText}>
        Back to
        <Link to="/" style={styles.link}>
          {' home '}
        </Link>
      </p>
    </div>
  )
}

const styles = {
  root: {},
  link: {
    color: '#ffbb36',
    fontWeight: 'bold',
    fontStyle: 'oblique',
  },
  id: {
    fontWeight: 'bolder',
  },
  icon: {
    fontSize: '4rem',
    display: 'flex',
    margin: '0 auto',
    padding: 40,
  },
  centerText: {
    marginTop: 32,
    textAlign: 'center',
  },
}

export default withStyles(styles)(withRouter(NotFound))
