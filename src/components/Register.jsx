import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Register extends Component {
  render() {
    return (
      <div>
        
        <p style={styles.introText}>
          Please register to continue
        </p>
        <p style={styles.smallText}>
          If you have already registered, you can use the same credentials here to login
        </p>

        {/* <Form onSubmit={this.props.register}> */}
        <Form onSubmit={(e)=>{this.props.login(e)}}>
          <FormGroup>
            <Input required autoFocus name="userName" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input required type="" name="userEmail" placeholder="E-mail" />
          </FormGroup>

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
  }, 
  smallText: {
    fontSize: '.9rem',
    paddingBottom: 20
  },
  button: {
    borderColor: '#fff',
    borderWidth: 'medium',
    color: '#fff',
    marginTop: 30
  },
  // 'button:hover': {
  //   backgroundColor: 'white'
  // }
  // cant disable hover background color... 
}