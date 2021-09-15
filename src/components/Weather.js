import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class Weather extends Component {
  render() {
    console.log(this.props);
    return (
      <Row>
        {this.props.weatherData.map((e) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title> {e.date}</Card.Title>
                  <Card.Text>
                    {e.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Weather;
