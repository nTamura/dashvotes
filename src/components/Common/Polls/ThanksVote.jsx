import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Share from 'components/Common/Share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ThanksVote({ classes, pid }) {
  return (
    <div className={classes.root}>
      <h2>Thanks for voting!</h2>

      {/* show cart results  */}

      <FontAwesomeIcon icon={faHeart} className={classes.icon} />
      <p>Your vote has been successfully cast.</p>
      <p>
        You can vote again, but note that it will overwrite your previous vote.
      </p>
      <Link to={'/'} className={classes.link}>
        Go back
      </Link>
      <p>or</p>
      <Share pid={pid} />
    </div>
  )
}

const styles = {
  root: {
    textAlign: 'center',
  },
  link: {
    color: '#ffbb36',
    fontWeight: 'bold',
    fontStyle: 'oblique',
  },
  icon: {
    fontSize: '4rem',
    // animation: 'pulse 3s .1s linear infinite',
  },
  // '@keyframes pulse': {
  //   '0%': { transform: 'scale(1)' },
  //   '50%': { transform: 'scale(1.1)' },
  //   '100%': { transform: 'scale(1)' },
  // },
}

export default withStyles(styles)(ThanksVote)
