import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Share from 'components/Common/Share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ThanksCreate = ({ classes, pid }) => (
  <div style={styles.root}>
    <h2>Thanks for your post!</h2>
    <FontAwesomeIcon icon={faHeart} className={classes.icon} />
    <p>Your poll has been successfully submitted.</p>
    <p>Check back soon to see the results!</p>
    <Link to={'/'} style={styles.link}>
      Go back
    </Link>
    <p>or</p>
    <Share pid={pid} />
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

export default withStyles(styles)(ThanksCreate)
