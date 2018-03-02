import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Register extends Component {
  render() {
    return (
      <Form onSubmit={this.props.register}>
        <FormGroup>
          <Label for="userForm">Please enter your e-mail address</Label>
          <Input required name="userEmail" placeholder="E-mail" />
        </FormGroup>
        <FormGroup>
          <Label for="emailForm">Enter a password</Label>
          <Input type="password" required name="userPassword" placeholder="Password" />
        </FormGroup>
        <Button type="submit" size="lg" block>Register</Button>
      </Form>
    )
  }
}