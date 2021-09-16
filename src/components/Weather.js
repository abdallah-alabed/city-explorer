import React, { Component } from "react";
import { Row } from "react-bootstrap";
import WeatherDay from "./WeatherDay";

class Weather extends Component {
  render() {
    console.log(this.props);
    return (
      <Row>
        {(this.props.weatherData).map((e) => {
          return <WeatherDay date={e.date} description={e.description} />;
        })}
      </Row>
    );
  }
}

export default Weather;
