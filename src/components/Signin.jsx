import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Signup extends Component {
  render() {

    return (
      <div className="container">
        <h1>Sign up to get started</h1>

        <Form onSubmit={this.props.login}>
          <FormGroup>
            <Label for="userForm">Please enter a username!</Label>
            <Input required name="userName" placeholder="Name or Username" />
          </FormGroup>
          <FormGroup>
            <Label for="emailForm">E-mail pls</Label>
            <Input required name="userEmail" placeholder="E-mail Address" />
          </FormGroup>
          <Button type="submit" size="lg" block>Register</Button>

        </Form>
          <Button type="button" onClick={this.props.hacker} size="lg" block>HACKER LOGIN</Button>
        {/* {fireRedirect && (
          <Redirect to={from || '/main'} />
        )} */}
      </div>
    )
  }
}