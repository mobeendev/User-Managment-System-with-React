import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const GroupForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSearch">Name</Label>
        <Input
          type="text"
          name="text"
          id="exampleSearch"
          placeholder="Enter group name here..."
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
     
     
  
      <FormGroup>
        <Label for="exampleSelect">Users Limmit</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleText">Desctiption</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Logo/Picture</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
 
    </Form>
  );
}

export default GroupForm;