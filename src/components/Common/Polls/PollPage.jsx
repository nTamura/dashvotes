import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import Share from 'components/Common/Share'
import toDate from 'helpers/toDate'
import { connect } from 'react-redux'

function PollPage({ classes, ...props }) {
  const [poll, setPoll] = useState()

  useEffect(() => {
    getPoll()
  }, [])

  const getPoll = () => {
    const { match, polls } = props
    const { id } = match.params
    const found = polls.find(p => p.id === Number(id))
    setPoll(found)
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
      {poll && (
        <>
          <div className={classes.flex}>
            <h2>{poll.title}</h2>
            <p>Poll Description to provide context for the poll</p>
            <form className={classes.form} onSubmit={handleSubmit}>
              {poll.options.map((item, i) => (
                <label key={i} htmlFor="option" className={classes.radioLabel}>
                  <input
                    type="radio"
                    value={item}
                    name="option"
                    aria-labelledby="option"
                    className={classes.radioButton}
                  />
                  {item}
                </label>
              ))}
              <Button type="submit">Vote</Button>
              <Share />
            </form>
          </div>
          <div className={classes.metaInfo}>
            <span className={classes.metaText}>
              {`Author: ${poll.createdBy}`}
            </span>
            <span className={classes.metaText}>{`Poll ID: ${poll.id}`}</span>
            <span className={classes.metaText}>
              {`Created: ${toDate(poll.createdAt)}`}
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
const mapStateToProps = state => ({ polls: state.polls.polls })

export default connect(mapStateToProps)(withStyles(styles)(PollPage))
