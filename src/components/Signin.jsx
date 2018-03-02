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
        <h1>Sign up to get started</h1>


        <Form onSubmit={this.props.login}>
          <FormGroup>
            <Label for="userForm">Please enter a username!</Label>
            <Input name="userName" id="userForm" placeholder="Name or Username" />
          </FormGroup>
          <FormGroup>
            <Label for="emailForm">E-mail pls</Label>
            <Input name="userEmail" id="emailForm" placeholder="E-mail Address" />
          </FormGroup>
          <Button size="lg" block>Register</Button>
        </Form>
        {/* {fireRedirect && (
          <Redirect to={from || '/main'} />
        )} */}
      </div>
    )
  }
}