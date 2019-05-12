import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <h4>Create a Poll</h4>
      <p className={styles.smallText}>
        Tips: <br />
        - Keep title and choices concice <br />- Privide context if needed
      </p>

      <form>
        <input />
        <button type="submit" className={classes.button}>
          Create
        </button>
      </form>
    </div>
  )
}
const styles = {
  root: {},
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    border: '1px solid #FFF',
    padding: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
}
export default withStyles(styles)(Container)
