import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Signup extends Component {
  render() {

    const { from } = this.props.location || '/'
    const { fireRedirect } = this.props

    return (
      <div className="container">
        <h1>Please sign up</h1>
        <form action="" 
              onSubmit={this.props.submitForm}>
          <input type="text" name="" id=""/>
        </form>
        {fireRedirect && (
          <Redirect to={from || '/main'} />
        )}
      </div>
    )
  }
}