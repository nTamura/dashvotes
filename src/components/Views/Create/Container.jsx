import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import FormContainer from 'components/Views/Create/FormContainer'
import ThanksCreate from 'components/Views/Create/ThanksCreate'
import { createPoll, clearPid } from 'store/actions/pollsActions'
import { connect } from 'react-redux'

function Container({ classes, auth, pid, clearPid, submitting, createPoll }) {
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
    if (pid) {
      setSubmitted(true)
    }
    return () => clearPid()
  }, [pid])

  const formSubmit = form => {
    createPoll(form)
  }

  return (
    <div className={classes.root}>
      {/* pid acts as successfully submitted, after retrieving id from firestore */}
      {!submitted ? (
        <FormContainer
          auth={auth}
          submitting={submitting}
          formSubmit={formSubmit}
        />
      ) : (
        <ThanksCreate pid={pid} />
      )}
    </div>
  )
}
const styles = {
  root: {},
}

const mapDispatchToProps = dispatch => ({
  createPoll: poll => dispatch(createPoll(poll)),
  clearPid: () => dispatch(clearPid()),
})
const mapStateToProps = state => ({
  auth: state.firebase.auth,
  pid: state.polls.pid,
  submitting: state.polls.submitting,
})

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
)
