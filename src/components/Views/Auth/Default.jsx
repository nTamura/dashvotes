import React from 'react'
import withStyles from 'react-jss'
import logo from 'assets/logo.png'

function Default({ classes, setFormShow }) {
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <h1 className={classes.title}>DASHVOTES</h1>
      <p className={classes.text}>
        Please
        <button
          type="button"
          className={classes.link}
          onClick={() => setFormShow('signin')}
        >
          Sign In
        </button>
        or
        <button
          type="button"
          className={classes.link}
          onClick={() => setFormShow('signup')}
        >
          Register
        </button>
      </p>
    </div>
  )
}

const styles = {
  root: { textAlign: 'center' },
  logo: {
    margin: 32,
    width: 180,
  },
  title: {
    fontWeight: 'lighter',
    margin: 0,
  },
  text: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },
  link: {
    color: '#fdab27',
    fontSize: '1rem',
    fontStyle: 'oblique',
    fontWeight: 'bold',
  },
}

export default withStyles(styles)(Default)
