import React from 'react'
import withStyles from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Loading from 'components/Common/Loading'
import calculateScore from 'helpers/calculateScore'
import toDate from 'helpers/toDate'

function Container({ classes, profile, auth }) {
  const { displayName, email, fname, pollsCreated, pollsVoted } = profile
  const { createdAt, photoUrl } = auth

  // alternative photoUrl need

  return (
    <div className={classes.root}>
      {profile.isLoaded && !profile.isEmpty ? (
        <>
          <div className={classes.header}>
            {/* <div className={classes.photo} /> */}
            <h2>{`${fname}'s profile`}</h2>
            <button className={classes.settings} type="button">
              <FontAwesomeIcon icon={faCog} className={classes.iconSettings} />
            </button>
          </div>
          <div className={classes.divider} />

          <h3>Basic</h3>
          <p>{`Display name: ${displayName}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`User since: ${toDate(createdAt)}`}</p>

          <h3>Stats</h3>
          <p>
            {`Dashscore: ${calculateScore([
              pollsCreated.length,
              pollsVoted.length,
            ])}`}
          </p>
          <p>Active polls: 3</p>
          <p>{`Polls created: ${pollsCreated.length}`}</p>
          <p>{`Polls voted: ${pollsVoted.length}`}</p>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

const styles = {
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settings: {
    padding: '8px 0 8px 8px',
  },
  iconSettings: {
    color: 'rgba(255,255,255,0.4)', //disabled
    fontSize: '1.4rem',
  },
  photo: {},
  divider: {
    borderBottom: '1px solid rgba(255,255,255,0.4)',
  },
}

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth,
})

export default withStyles(styles)(connect(mapStateToProps)(Container))
