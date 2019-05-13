import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import Share from 'components/Common/Share'
import toDate from 'helpers/toDate'

function PollPage({ classes, poll, ...props }) {
  // cal cloud func, get poll by id
  const { id } = props.match.params
  const date = Date.now()
  const choices = ['option 1', 'option 2', 'option 3']
  // console.log(props)
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <p>{id}</p>
        <h2>Poll page title here with a long title?</h2>
        <p>Poll Description to provide context for the poll</p>
        <form className={classes.form}>
          {choices.map((item, i) => (
            <label key={i} className={classes.radioLabel}>
              <input
                type="radio"
                value={item}
                className={classes.radioButton}
              />
              {item}
              {/* <p className={classes.radioLabel}>{item}</p> */}
            </label>
          ))}
          <Button>Vote</Button>
          <Share />
        </form>
      </div>
      {/* { hasVoted &&
        <FormText color="warning">You have already voted. Voting again will overwrite your previous vote!</FormText>
      }
      { isOwner &&
        <FormText color="warning">You cannot vote on your own polls</FormText>
      } */}

      <div className={classes.metaInfo}>
        <span className={classes.metaText}>Author: username</span>
        <span className={classes.metaText}>Created: {toDate(date)}</span>
      </div>
    </div>
  )
}
const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  flex: {
    flex: 1,
  },
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
  radioButton: {
    marginRight: 8,
  },
  share: {
    color: '#FFF',
    margin: 8,
  },
  metaInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  metaText: {
    color: 'rgba(255,255,255,0.4)',
  },
}
export default withStyles(styles)(PollPage)
