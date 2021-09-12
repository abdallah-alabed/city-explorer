import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class LocationForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>What City You Want To Explore?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter a Location..."
              onChange={this.props.handleLocation}
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
