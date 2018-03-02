import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Register extends Component {
  render() {
    return (
      <div>

        <p style={styles.introText}>
          Please sign in to continue
        </p>

        <Form onSubmit={this.props.register}>
          <FormGroup>
            <Input required autoFocus name="userEmail" placeholder="E-mail" />
          </FormGroup>
          {/* <FormGroup>
            <Input type="password" required name="userPassword" placeholder="Password" />
          </FormGroup> */}
          <Button type="submit" size="lg" block outline 
            style={styles.button} >
            Register
          </Button>
        </Form>
      </div>
    )
  }
}

const styles={
  introText: {
    // paddingBottom: 20
  }, 
  button: {
    borderColor: '#fff',
    borderWidth: 'medium',
    color: '#fff',
  },
  // 'button:hover': {
  //   backgroundColor: 'white'
  // }
  // cant disable hover background color... 
}