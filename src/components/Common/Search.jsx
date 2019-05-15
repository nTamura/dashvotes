import React from 'react'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

function Search({ classes, history, ...props }) {
  const handleQuery = e => {
    e.preventDefault()
    const query = e.target.search.value
    const id = scrubUrl(query)
    const found = props.polls.find(p => p.id === id)
    if (found) {
      history.push(`/poll/${id}`)
    } else {
      console.log('Invalid query')
    }
  }

  const scrubUrl = q => Number(q.substr(q.lastIndexOf('/') + 1))

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
    margin: '8px 0 16px',
  },
  icon: {
    padding: 8,
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
const mapStateToProps = state => ({ polls: state.polls.polls })

export default withStyles(styles)(connect(mapStateToProps)(withRouter(Search)))
