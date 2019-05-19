import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import Loading from 'components/Common/Loading'
import { fetchPoll, votePoll, clearPoll } from 'store/actions/pollsActions'
import { connect } from 'react-redux'
import PollPage from 'components/Views/Polls/PollPage'
import NotFound from 'components/Common/Polls/NotFound'

function Container({
  classes,
  fetchPoll,
  clearPoll,
  votePoll,
  match,
  profile,
  poll,
  pollNotFound,
}) {
  useEffect(() => {
    getPoll()
    return () => clearPoll()
  }, [])

  const getPoll = () => {
    const { id } = match.params
    fetchPoll(id)
  }

  const detect = () => {
    if (pollNotFound) {
      return <NotFound />
    } else {
      return <Loading />
    }
  }

  return (
    <div className={classes.root}>
      {profile.isLoaded && poll ? (
        <PollPage profile={profile} poll={poll} votePoll={votePoll} />
      ) : (
        detect()
      )}
    </div>
  )
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  flex: { flex: 1 },
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    poll: state.polls.poll,
    polls: state.polls.polls,
    pollNotFound: state.polls.pollNotFound,
    pollsMessage: state.polls.poll,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPoll: id => dispatch(fetchPoll(id)),
  votePoll: obj => dispatch(votePoll(obj)),
  clearPoll: () => dispatch(clearPoll()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Container))
