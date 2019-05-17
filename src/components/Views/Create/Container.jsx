import React, { useState } from 'react'
import withStyles from 'react-jss'
import FormContainer from 'components/Views/Create/FormContainer'
import ThanksCreate from 'components/Views/Create/ThanksCreate'
import { createPoll } from 'store/actions/pollsActions'
import { connect } from 'react-redux'

function Container({ classes, auth, pid, submitting, createPoll }) {
  const formSubmit = async form => {
    await createPoll(form)
    // } else {
    // dispatch form error
    // console.log('error')
    // }
  }

  return (
    <div className={classes.root}>
      {/* pid acts as successfully submitted, after retrieving id from firestore */}
      {!pid ? (
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
