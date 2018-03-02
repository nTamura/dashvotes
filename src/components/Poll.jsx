import React, { Component } from 'react'
import fire from '../firebase'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
// Main page gets data from db
// maps out polls, dynamic route '/:pollId'
// for now static dummy data 

export default class Poll extends Component {
  render() {
    return (
      <div>
        <h1>poll poop</h1>
        <hr/>
        {/* <Form onClick={()=>{this.props.votePoll(e)}}>
          <input type="text" name="username" placeholder="What's your name?" /> */}
      <Form onSubmit={(e)=>{this.props.votePoll(e)}}>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
          <Button type="submit">Add Item</Button>
        </FormGroup>
        </Form>

      </div>
    )
  }
}
