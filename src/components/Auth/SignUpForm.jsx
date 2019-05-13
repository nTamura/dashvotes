import React from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'

function SignUpForm({ classes, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname" className={classes.label}>
        First name
        <input type="text" name="fname" id="fname" className={classes.input} />
      </label>
      <label htmlFor="lname" className={classes.label}>
        Last name
        <input type="text" name="lname" id="lname" className={classes.input} />
      </label>

      <label htmlFor="email" className={classes.label}>
        Email
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Valid email requried for verification"
          className={classes.input}
        />
      </label>

      <label htmlFor="password" className={classes.label}>
        Password
        <input
          type="password"
          name="password"
          id="password"
          className={classes.input}
        />
      </label>

      <p className={classes.nameHelper}>
        You will be visible to users as "Nic T"
      </p>

      <Button type="submit">Create</Button>
    </form>
  )
}
const styles = {
  root: {},
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
    border: 'none',
    fontSize: '1rem',
  },
  nameHelper: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
}
export default withStyles(styles)(SignUpForm)
