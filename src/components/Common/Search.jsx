import React from 'react'
import withStyles from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search({ classes }) {
  const handleQuery = e => {
    e.preventDefault()
    const query = e.target.search.value
    if (query !== '' && query.length >= 6) {
      const id = query.substr(-6)
      console.log(id)
      try {
        // call cloud func with this query
      } catch (err) {
        // no results or bad query
      }
    } else {
      console.log('invalid query')
    }
  }

  return (
    <div className={classes.root}>
      <form className={classes.inputGroup} onSubmit={e => handleQuery(e)}>
        <input
          className={classes.input}
          placeholder=" Search for poll by URL or ID"
          type="text"
          id="search"
          name="search"
        />
        <button type="submit" className={classes.button}>
          <FontAwesomeIcon className={classes.icon} icon={faSearch} />
        </button>
      </form>
    </div>
  )
}
const styles = {
  root: {},
  inputGroup: {
    display: 'flex',
    margin: '8px 0',
  },
  icon: {
    margin: 8,
  },
  input: {
    flex: 1,
    padding: 12,
    border: 'none',
    borderRadius: '5px 0 0 5px',
    fontSize: '1rem',
  },
  button: {
    color: '#FFF',
    border: '2px solid #FFF',
    borderRadius: '0 5px 5px 0',
    backgroundColor: 'transparent',
  },
}
export default withStyles(styles)(Search)
