import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class Location extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              <h2>{this.props.display_name}</h2>
            </Card.Title>
            <Card.Text>
              lat:{this.props.lat}/lon:{this.props.lon}
            </Card.Text>
            <br></br>
            <Col xs={6} md={4}>
              <Card.Img variant="bottom" src={this.props.location} />
            </Col>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Location;
