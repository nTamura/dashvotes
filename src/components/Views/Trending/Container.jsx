import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import Loading from 'components/Common/Loading'
import PollsList from 'components/Common/Polls/PollsList'
import SortMenu from 'components/Views/Trending/SortMenu'

function Container({ classes, polls }) {
  const [showMenu, setShowMenu] = useState(false)
  const [sortedPolls, setSortedPolls] = useState()

  useEffect(() => {
    sortPolls(polls)
  }, [sortedPolls])

  const sortPolls = polls => {
    // run default trending sort
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const sortBy = e => {
    setShowMenu(false)
    const query = e.target.id
    // setSortedPolls(query)
    console.log(query)
  }
  return (
    <div className={classes.root}>
      <h2>Trending</h2>
      <div className={classes.flex}>
        <p>Browsing top polls</p>
        <button type="button" className={classes.sortBy} onClick={toggleMenu}>
          Sort by
          <FontAwesomeIcon icon={faSortDown} className={classes.icon} />
        </button>

        {showMenu && (
          <div
            className={classes.overlay}
            role="presentation"
            onClick={toggleMenu}
          />
        )}
        {showMenu && <SortMenu toggleMenu={toggleMenu} sortBy={sortBy} />}
      </div>
      {polls ? <PollsList polls={polls} /> : <Loading />}
    </div>
  )
}
const styles = {
  root: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  sortBy: {
    color: '#FFF',
    margin: 0,
    fontSize: '1rem',
    fontWeight: 'inherit',
  },
  icon: {
    marginLeft: 4,
  },
}
const mapStateToProps = state => {
  return { polls: state.firestore.ordered.polls }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'polls' }])
)(Container)
