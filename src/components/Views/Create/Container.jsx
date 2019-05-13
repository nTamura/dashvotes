import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from 'components/Common/Button'
import Form from 'components/Views/Create/Form'

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
      <p className={classes.tips}>Tips:</p>
      <ul>
        <li className={classes.tipTxt}>Keep title and options concice</li>
        <li className={classes.tipTxt}>Provide context if needed</li>
      </ul>

      <Form handleSubmit={handleSubmit} />
    </div>
  )
}
const styles = {
  root: {},
  tips: {
    marginBottom: 0,
  },
  tipTxt: {
    fontStyle: 'italic',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
  },
}
export default withStyles(styles)(Container)
