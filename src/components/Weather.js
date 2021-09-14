import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Weather extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Text>
             {this.props.weatherData}
            </Card.Text>
            <br></br>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Weather;
