import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Weather extends Component {
  render() {
    console.log(this.props);
    return (
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>The Weather for the Upcoming 16 Days</Card.Title>
          <Card.Text>
            {this.props.weatherData.map((e) => {
              return `${e.date}: ${e.description} \n`;
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Weather;
