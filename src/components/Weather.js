import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Weather extends Component {
  render() {
    return (
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>The Weather for the Upcoming 16 Days {this.props.weatherData}</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Weather;
