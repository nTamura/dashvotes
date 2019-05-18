import React from 'react'
import withStyles from 'react-jss'

function SortMenu({ classes, toggleMenu, sortBy, ...props }) {
  return (
    <div className={classes.menu}>
      <ul className={classes.menuList}>
        <li className={classes.menuItemLi}>
          <button
            type="button"
            id="popularity"
            className={classes.menuItem}
            onClick={e => {
              sortBy(e)
            }}
          >
            Popularity
          </button>
        </li>
        <li className={classes.menuItemLi}>
          <button
            type="button"
            id="newest"
            className={classes.menuItem}
            onClick={e => {
              sortBy(e)
            }}
          >
            Newest
          </button>
        </li>
        <li className={classes.menuItemLi}>
          <button
            type="button"
            id="oldest"
            className={classes.menuItem}
            onClick={e => {
              sortBy(e)
            }}
          >
            Recently active
          </button>
        </li>
      </ul>
    </div>
  )
}
const styles = {
  menu: {
    zIndex: 2,
    position: 'absolute',
    backgroundColor: '#444661',
    right: 0,
    top: 38,
    borderRadius: 5,
  },
  menuList: {
    padding: 0,
  },
  menuItemLi: {
    listStyle: 'none',
    textAlign: 'right',
  },
  menuItem: {
    padding: 8,
    margin: 8,
    color: '#FFF',
    fontSize: '0.8rem',
  },
}

export default withStyles(styles)(SortMenu)
