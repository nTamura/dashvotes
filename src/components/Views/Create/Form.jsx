import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'

// disable button if no fields || submitting
// need onchange handlers for each input

function Form({ classes, submitting, fieldsEmpty, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" className={classes.label}>
        Title*
        <input
          autoFocus
          type="text"
          placeholder="Is ketchup technically a jam?"
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
          required
          aria-labelledby="option"
          className={classes.input}
        />
        <input
          type="text"
          placeholder="Required"
          name="option"
          required
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

      {/* add in poll expiry fields, private/invite only checkbox */}

      <Button disabled={fieldsEmpty || submitting} type="submit">
        Create
      </Button>
    </form>
  )
}
const styles = {
  root: {},
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
    borderColor: '#FFF',
    fontSize: '1rem',
  },
  error: {
    borderColor: '#ff0000',
  },
}
export default withStyles(styles)(Form)
