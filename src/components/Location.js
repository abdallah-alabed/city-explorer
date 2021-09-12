import React, { Component } from "react";
import { Card } from "react-bootstrap";

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
              <h4>
                lat:{this.props.lat}/lon:{this.props.lon}
              </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Location;
