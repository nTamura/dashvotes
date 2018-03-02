import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Signup extends Component {
  render() {

    return (
      <div className="container">
        <h1>Sign up to get started</h1>
        {/* NOT IN USE UNTIL I GET USER REGISTERED */}
        <Form onSubmit={this.props.login}>
          <FormGroup>
            <Label for="userForm">Email please</Label>
            <Input required name="userEmail" 
                   placeholder="E-mail" />
          </FormGroup>
          <FormGroup>
            <Label for="emailForm">Password</Label>
            <Input type="password" 
                   required name="userPassword" 
                   placeholder="Password" />
          </FormGroup>
          <Button type="submit" 
                  size="lg" 
                  block>Log in</Button>
          <p>dont have an acc? hit the button below</p>
          <Link to="/register" style={styles.register}>
            <Button type="submit" 
                    size="lg" 
                    block>Register</Button>
          </Link>
        </Form>
          <Button type="button" 
                  onClick={this.props.hacker} 
                  size="lg" 
                  block>HACKER LOGIN</Button>
        {/* {fireRedirect && (
          <Redirect to={from || '/main'} />
        )} */}
      </div>
    )
  }
}

const styles = {
  register: {
    textDecoration: 'none'
  }
}