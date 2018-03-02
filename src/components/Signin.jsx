import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class Signup extends Component {
  render() {

    const { from } = this.props.location || '/'
    const { fireRedirect } = this.props

    const styles = {
      signIn: {
        background: '#E1BEE7'
      }
    }

    return (
      <div className="container-fluid" style={styles.signIn}>
        <h1>Please sign up</h1>
        <Form onSubmit={this.props.submitForm}>
          <FormGroup>
            <Label for="userForm">Please enter a username!</Label>
            <Input name="username" id="userForm" placeholder="Name or Username" />
          </FormGroup>
          <FormGroup>
            <Label for="emailForm">E-mail pls</Label>
            <Input name="email" id="emailForm" placeholder="E-mail Address" />
          </FormGroup>
          <Button size="lg" block>Block level button</Button>
        </Form>
        {fireRedirect && (
          <Redirect to={from || '/main'} />
        )}
      </div>
    )
  }
}