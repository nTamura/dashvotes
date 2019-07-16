import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom'
import Button from 'components/Common/Button'
import Share from 'components/Common/Share'
import toDate from 'helpers/toDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ThanksVote from 'components/Common/Polls/ThanksVote'

function PollPage({ classes, votePoll, match, profile, pollVoted, poll }) {
  const [hasVoted, setHasVoted] = useState(false)
  const [radioOption, setRadioOption] = useState(null)

  useEffect(() => {
    checkAlreadyVoted()
    console.log(poll.options)
  })

  const checkAlreadyVoted = () => {
    profile.pollsVoted.find(item => {
      if (item === poll.pid) {
        setHasVoted(true)
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const { uid, displayName } = profile
    const template = {
      pid: poll.pid,
      options: data.get('option'),
      voter: { displayName, uid },
    }
    if (!profile.isEmpty) {
      votePoll(template)
    }
  }

  return (
    <div className={classes.root}>
      {pollVoted ? (
        <ThanksVote pid={poll.id} />
      ) : (
        <>
          <div className={classes.flex}>
            <h2>
              {poll.title}
              {hasVoted && (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={classes.votedCheck}
                />
              )}
            </h2>
            {hasVoted && (
              <p className={classes.votedText}>
                You have already voted. Voting again will overwrite your
                previous vote
              </p>
            )}

            <p>{poll.description}</p>
            <form className={classes.form} onSubmit={handleSubmit}>
              {poll.options.map((item, i) => (
                <label key={i} htmlFor={item} className={classes.radioLabel}>
                  <input
                    type="radio"
                    value={item}
                    id={item}
                    name="option"
                    onClick={() => setRadioOption(item)}
                    aria-label={item}
                    className={classes.radioButton}
                  />
                  {item}
                </label>
              ))}
              {profile.isEmpty && <p>You must be signed in to vote!</p>}
              <Button disabled={profile.isEmpty || !radioOption} type="submit">
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
        </>
      )}
    </div>
  )
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
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
  share: { margin: 8 },
  metaInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  votedCheck: {
    color: '#fdab27',
    fontSize: '1rem',
    marginLeft: 8,
    verticalAlign: 'middle',
  },
  votedText: {
    marginTop: '-1rem',
    color: 'rgba(255,255,255,0.4)',
  },
  metaText: { color: 'rgba(255,255,255,0.4)' },
}

export default withStyles(styles)(withRouter(PollPage))
