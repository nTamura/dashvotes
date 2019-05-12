import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

function NotFound({ classes }) {
  return (
    <div className={classes.root}>
      <h5>This kills the internet.</h5>
      <p>
        Check the URL of the page you are trying to get to, or
        <Link to="/" className={classes.link}>
          {' click here '}
        </Link>
        to go back home.
      </p>
    </div>
  )
}
const styles = {
  root: {
    padding: 32,
    marginTop: 32,
    textAlign: 'center',
  },
  link: {
    color: '#EE6352',
    textDecoration: 'none',
  },
}

export default withStyles(styles)(NotFound)
