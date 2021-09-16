import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";

class MovieSingle extends Component {
  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }} class="d-flex justify-content-evenly">
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text> {this.props.overview}</Card.Text>
            <Card.Text> {this.props.average_votes}</Card.Text>
            <Card.Text> {this.props.total_votes}</Card.Text>
            <Card.Text> {this.props.popularity}</Card.Text>
            <Card.Text> {this.props.released_on}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MovieSingle;
