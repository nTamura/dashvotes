import React from 'react'
import withStyles from 'react-jss'
import Form from 'components/Views/Create/Form'

function FormContainer({ classes, auth, submitting, formSubmit }) {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const { uid, displayName } = auth
    const template = {
      title: data.get('title'),
      description: data.get('description'),
      options: data.getAll('option').filter(p => p !== ''),
      createdBy: { uid, displayName },
    }
    // if (checkForm(template)) {
    formSubmit(template)
    // } else {
    // dispatch form error
    // console.log('error')
    // }
  }

  const checkForm = form => {
    // get proper value checking in form later
    const { title, description, options } = form
    if (!title || !options) {
      return false
    }
  }

  return (
    <div className={classes.root}>
      <h2>Create a poll</h2>
      <p className={classes.tips}>Tips:</p>
      <ul>
        <li className={classes.tipTxt}>Keep title and options concice</li>
        <li className={classes.tipTxt}>Provide context if needed</li>
        <li className={classes.tipTxt}>Share your link once you complete!</li>
      </ul>

      <Form handleSubmit={handleSubmit} submitting={submitting} />
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
export default withStyles(styles)(FormContainer)
