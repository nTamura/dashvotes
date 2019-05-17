import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ThanksVote = props => (
  <div style={styles.root}>
    <h2>Thanks for voting!</h2>
    <FontAwesomeIcon icon={faHeart} className={classes.icon} />
    <p>Your vote is appreciated. </p>
    <p>
      Click here for the
      <Link to={`/results/${props.pollId}`} style={styles.link}>
        {' results '}
      </Link>
    </p>
    <p>
      Or go back to
      <Link to="/polls" style={styles.link}>
        {' polls '}
      </Link>
    </p>
  </div>
)

const styles = {
  root: {
    textAlign: 'center',
    padding: '10%',
  },
  icon: {
    fontSize: '4rem',
  },
  link: {
    color: '#ffbb36',
    fontWeight: 'bold',
    fontStyle: 'oblique',
  },
}

export default withStyles(styles)(ThanksVote)
