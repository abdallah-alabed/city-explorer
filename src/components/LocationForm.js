import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class LocationForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter City Name"
              onChange={this.props.newName}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
      </div>
    );
  }
}

export default LocationForm;
