import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'

function Container({ classes }) {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const template = {
      title: data.get('title'),
      description: data.get('description'),
      options: data.getAll('option').filter(p => p !== ''),
      createdBy: 'user',
      createdAt: Date.now(),
      expireAt: '',
      isPublic: true,
    }
    console.table('Form', template)
    // ...post to db, fireRedirect, update polls list
  }

  return (
    <div className={classes.root}>
      <h4>Create a Poll</h4>
      <p className={styles.smallText}>Tips:</p>
      <ul>
        <li>Keep title and options concice</li>
        <li>Provide context if needed</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className={classes.label}>
          Title*
          <input
            type="text"
            placeholder="Is ketchup actually a jam?"
            name="title"
            id="title"
            className={classes.input}
          />
        </label>
        <label htmlFor="description" className={classes.label}>
          Description
          <input
            type="text"
            placeholder="Provide optional context"
            name="description"
            id="description"
            className={classes.input}
          />
        </label>

        <label htmlFor="option" className={classes.label}>
          Options*
          <input
            type="text"
            placeholder="Required"
            name="option"
            aria-labelledby="option"
            className={classes.input}
          />
          <input
            type="text"
            placeholder="Required"
            name="option"
            aria-labelledby="option"
            className={classes.input}
          />
          <input
            type="text"
            placeholder="Optional"
            name="option"
            aria-labelledby="option"
            className={classes.input}
          />
          <input
            type="text"
            placeholder="Optional"
            name="option"
            aria-labelledby="option"
            className={classes.input}
          />
          {/* add fields button, appends optional input  */}
        </label>

        {/* expiry fields, not for MVP */}
        {/* <label htmlFor="expiry">
          Will expire after:
          <input
            type="text"
            size={4}
            maxLength={4}
            placeholder=""
            name="expiry"
            id="expiry"
          />
          <select name="type">
            <option value="hours">Hours</option>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="votes">Votes</option>
          </select>
        </label> */}

        <Button type="submit">Create</Button>
        {/* <button type="submit" className={classes.button}>
          Create
        </button> */}
      </form>
    </div>
  )
}
const styles = {
  root: {},
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
    border: 'none',
    fontSize: '1rem',
  },
}
export default withStyles(styles)(Container)
