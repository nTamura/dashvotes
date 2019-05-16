import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import withStyles from 'react-jss'
import { Transition } from 'react-transition-group'
import HamburgerMenu from 'react-hamburger-menu'
import { signOut } from 'store/actions/authActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

function NavMenu({ classes, signOut, ...props }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSignout = () => {
    setMenuOpen(false)
    signOut()
    // trigger logged out notification
    // case user is on public page so no redirect
  }

  return (
    <div className={classes.root}>
      <HamburgerMenu
        isOpen={menuOpen}
        width={24}
        height={16}
        color="#FFF"
        className={classes.menuIcon}
        animationDuration={0.4}
        menuClicked={() => setMenuOpen(!menuOpen)}
      />

      <Transition in={menuOpen} unmountOnExit timeout={0}>
        {state => (
          <>
            <div
              role="presentation"
              className={menuOpen ? classes.overlay : null}
              onClick={() => setMenuOpen(false)}
              style={{
                transition: 'opacity 350ms ease-in-out',
                opacity: 0,
                ...transitionStyles[state],
              }}
            />
            <ul
              className={classes.menuList}
              style={{
                transition: 'opacity 350ms ease-in-out',
                opacity: 0,
                ...transitionStyles[state],
              }}
            >
              <p className={classes.menuItem}>Hi Nic</p>
              <hr />
              <Link
                to="/activity"
                className={classes.menuItem}
                onClick={() => setMenuOpen(false)}
              >
                Activity
                <FontAwesomeIcon icon={faCircle} className={classes.circle} />
              </Link>
              <Link
                to="/profile"
                className={classes.menuItem}
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                type="button"
                onClick={handleSignout}
                className={classes.menuItem}
              >
                Log Out
              </button>
            </ul>
          </>
        )}
      </Transition>
    </div>
  )
}
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
}
const styles = {
  root: {},
  overlay: {
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 52,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  menuIcon: {
    padding: 4,
  },
  circle: {
    paddingLeft: 8,
    fontSize: '.6rem',
    color: '#ff740a',
    verticalAlign: 'baseline',
  },
  menuList: {
    listStyle: 'none',
    position: 'fixed',
    height: '100%',
    width: '35%',
    maxWidth: 200,
    right: 0,
    top: 52,
    margin: 0,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#444661',
    zIndex: 2,
  },
  menuItem: {
    display: 'block',
    whiteSpace: 'nowrap',
    margin: '16px 0',
    padding: 4,
    fontSize: '1rem',
    fontWeight: 300,
    color: '#FFF',
    width: 'fit-content',
    '&:active': {
      fontWeight: 'bolder',
    },
  },
}
// export default withStyles(styles)(withRouter(NavMenu))

const mapStateToProps = state => {
  // get user for username
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(withRouter(NavMenu))
)
