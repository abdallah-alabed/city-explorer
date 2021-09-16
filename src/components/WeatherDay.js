import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class WeatherDay extends Component {
  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/19eade8290555.560ba8a77a8da.jpg"
          />
          <Card.Body>
            <Card.Title> {this.props.date} </Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default WeatherDay;
