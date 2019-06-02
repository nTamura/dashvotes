import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import { connect } from 'react-redux'

function Container({ classes, auth }) {
  console.log(auth)
  return (
    <div className={classes.root}>
      <h2>Welcome username</h2>
      <p>You currently have X active polls</p>
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
const mapStateToProps = state => ({
  auth: state.firebase.auth,
})

export default withStyles(styles)(connect(mapStateToProps)(Container))
