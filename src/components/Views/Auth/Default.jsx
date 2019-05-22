import React from 'react'
import withStyles from 'react-jss'
import logo from 'assets/logo.png'

function Default({ classes, setFormShow }) {
  return (
    <div className={classes.root}>
      <div className={[classes.outer, classes.ripple].join(' ')}>
        <div className={[classes.inner, classes.ripple].join(' ')}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
      </div>
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
  logo: {
    maxWidth: 180,
    padding: 8,
    borderRadius: '50%',
    boxShadow: '0 0 0 rgba(255,255,255, 1)',
    animation: 'ripple 3s linear infinite',
  },
  ripple: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '50%',
    boxShadow: '0 0 0 rgba(255,255,255, 1)',
  },
  outer: {
    margin: 16,
    padding: 24,
    animation: 'ripple 3s .2s linear infinite',
  },
  inner: {
    padding: 24,
    animation: 'ripple 3s .1s linear infinite',
  },
  // '@keyframes pulse': {
  //   '0%': { boxShadow: '0 0 0 0 rgba(255,255,255, 0.4)' },
  //   '70%': { boxShadow: '0 0 0 10px rgba(204,169,44, 0)' },
  //   '100%': { boxShadow: '0 0 0 0 rgba(204,169,44, 0)' },
  // },

  '@keyframes ripple': {
    '0%': { boxShadow: '0 0 0 0 rgba(255,255,255, 0.4)' },
    '70%': { boxShadow: '0 0 0 6px rgba(255,255,255, 0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(255,255,255, 0)' },
  },

  // '@keyframes heart': {
  //   '0%': { transform: 'scale(1)' },
  //   '50%': { transform: 'scale(1.1)' },
  //   '100%': { transform: 'scale(1)' },
  // },
}

export default withStyles(styles)(Default)
