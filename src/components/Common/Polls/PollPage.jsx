import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import Share from 'components/Common/Share'
import toDate from 'helpers/toDate'
import { fetchPoll } from 'store/actions/pollsActions'
import { connect } from 'react-redux'
import NotFound from 'components/Common/Polls/NotFound'

function PollPage({
  classes,
  fetchPoll,
  match,
  uid,
  pollsMessage,
  poll,
  pollNotFound,
}) {
  const [loading, setLoading] = useState(true)
  const [signedIn, setSignedIn] = useState()

  useEffect(() => {
    getPoll()
    checkAuth()
  }, [uid])

  const getPoll = async () => {
    const { id } = match.params
    await fetchPoll(id)
    setLoading(false)
  }
  const checkAuth = () => {
    if (uid) {
      setSignedIn(true)
    } else {
      setSignedIn(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    console.log(data)
    const template = {
      options: data.get('option'),
      voter: 'currentUser',
    }
    console.table(poll.id, template)
    // send to firebase, on OK, render thank you
  }

  return (
    <div className={classes.root}>
      {!loading && poll && (
        <>
          <div className={classes.flex}>
            <h2>{poll.title}</h2>
            <p>{poll.description}</p>
            <form className={classes.form} onSubmit={handleSubmit}>
              {poll.options.map((item, i) => (
                <label key={i} htmlFor={item} className={classes.radioLabel}>
                  <input
                    type="radio"
                    value={item}
                    id={item}
                    name="option"
                    aria-label={item}
                    className={classes.radioButton}
                  />
                  {item}
                </label>
              ))}
              {!signedIn && <p>You must be signed in to vote!</p>}
              <Button disabled={!signedIn} type="submit">
                Vote
              </Button>
              <Share />
            </form>
          </div>
          <div className={classes.metaInfo}>
            <span className={classes.metaText}>
              {`Author: ${poll.createdBy.displayName}`}
            </span>
            <span className={classes.metaText}>
              {`Created: ${toDate(poll.createdAt)}`}
            </span>
            <span className={classes.metaText}>
              {`Poll ID: ${match.params.id}`}
            </span>
          </div>
          {/* { hasVoted &&
            <FormText color="warning">You have already voted. Voting again will overwrite your previous vote!</FormText>
          }
          { isOwner &&
            <FormText color="warning">You cannot vote on your own polls</FormText>
          } */}
        </>
      )}
      {pollNotFound && <NotFound />}
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
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 16,
    fontSize: '1.2rem',
  },
  radioButton: { marginRight: 8 },
  share: {
    color: '#FFF',
    margin: 8,
  },
  metaInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  metaText: { color: 'rgba(255,255,255,0.4)' },
}
const mapStateToProps = state => ({
  uid: state.firebase.auth.uid,
  poll: state.polls.poll,
  pollNotFound: state.polls.pollNotFound,
  pollsMessage: state.polls.poll,
})

const mapDispatchToProps = dispatch => ({
  fetchPoll: id => dispatch(fetchPoll(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PollPage))
