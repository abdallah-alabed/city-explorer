import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Location extends Component {
  render() {
    return (
      <Card  class="d-flex justify-content-evenly">
        <Card.Img
          style={{ width: "25rem", height: "25rem" }}
          variant="top"
          class="rounded mx-auto d-block"
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=7`}
        />
        <Card.Body>
          <Card.Title class="text-center">{this.props.cityData.display_name}</Card.Title>
          <Card.Text class="text-center">
            LAT: {this.props.cityData.lat} / LON: {this.props.cityData.lon}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Location;
