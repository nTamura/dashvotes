import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

function Container({ classes }) {
  return (
    <div className={classes.root}>
      <h2>Your active polls</h2>
      <p>Sort by</p>
      <div className={classes.menuList}>
        <div className={classes.item}>
          <Link className={classes.itemTitle}>
            This is an example of a long poll title text
          </Link>
          <p>1150 votes</p>
        </div>
        <div className={classes.item}>
          <Link className={classes.itemTitle}>This is a poll</Link>
          <p>50 votes</p>
        </div>
      </div>
      <p>Expired polls</p>
      <div className={classes.menuList}>
        <div className={classes.item}>
          <Link className={classes.itemTitle}>
            This is an example of a long poll title text
          </Link>
          <p>1150 votes</p>
        </div>
        <div className={classes.item}>
          <Link className={classes.itemTitle}>This is a poll</Link>
          <p>50 votes</p>
        </div>
      </div>
    </div>
  )
}
const styles = {
  root: {},
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    border: '2px solid #FFF',
    borderRadius: 5,
    padding: 8,
    margin: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: 8,
    padding: '8px 0',
    fontWeight: 'bold',
  },
}
export default withStyles(styles)(Container)
