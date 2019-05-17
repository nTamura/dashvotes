import React, { useState } from 'react'
import withStyles from 'react-jss'
import PollsList from 'components/Common/Polls/PollsList'
import Loading from 'components/Common/Loading'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

function Container({ classes, polls, ...props }) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const sortBy = e => {
    const query = e.target.id
    // sort polls by query
  }
  return (
    <div className={classes.root}>
      <h2>Trending</h2>
      <div className={classes.flex}>
        <p>Browsing top polls</p>
        <button type="button" className={classes.sortBy} onClick={toggleMenu}>
          Sort by <FontAwesomeIcon icon={faSortDown} className={classes.icon} />
        </button>
        {!showMenu && (
          <div className={classes.menu}>
            <ul className={classes.menuList}>
              <li
                id="popularity"
                className={classes.menuItem}
                onClick={e => {
                  sortBy(e)
                }}
              >
                Popularity
              </li>
              <li
                id="newest"
                className={classes.menuItem}
                onClick={e => {
                  sortBy(e)
                }}
              >
                Newest
              </li>
              <li
                id="oldest"
                className={classes.menuItem}
                onClick={e => {
                  sortBy(e)
                }}
              >
                Oldest
              </li>
            </ul>
          </div>
        )}
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
  menu: {
    position: 'absolute',
    backgroundColor: '#444661',
    right: 0,
    top: 38,
    borderRadius: 5,
  },
  menuList: {
    padding: 0,
  },
  menuItem: {
    padding: 8,
    margin: 16,
    listStyle: 'none',
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
  // console.log(state)
  return { polls: state.firestore.ordered.polls }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'polls' }])
)(Container)
