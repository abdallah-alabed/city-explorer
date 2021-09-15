import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";

class Movies extends Component {
  render() {
    return (
      <Row>
        {this.props.moviesData.length !== 0 &&
          this.props.showMovies &&
          this.props.moviesData.map((e) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }} class="d-flex justify-content-evenly">
                  <Card.Img
                    variant="top"
                    src={e.image_url}
                  />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.overview}</Card.Text>
                    <Card.Text>{e.average_votes}</Card.Text>
                    <Card.Text>{e.total_votes}</Card.Text>
                    <Card.Text>{e.popularity}</Card.Text>
                    <Card.Text>{e.released_on}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })

          //   <ListGroup style={{ width: "40rem" }}>
          //     <ListGroup.Item variant="info">Top Movie</ListGroup.Item>
          //     <ListGroup.Item variant="primary">
          //       {" "}
          //       Title:
          //       {this.props.moviesData[0].title}
          //     </ListGroup.Item>
          //     <ListGroup.Item variant="info">
          //       {" "}
          //       Overview: {this.props.moviesData[0].overview}
          //     </ListGroup.Item>
          //     <ListGroup.Item variant="primary">
          //       {" "}
          //       Avg Votes: {this.props.moviesData[0].average_votes}
          //     </ListGroup.Item>
          //     <ListGroup.Item variant="info">
          //       {" "}
          //       Total Votes: {this.props.moviesData[0].total_votes}
          //     </ListGroup.Item>
          //     <ListGroup.Item variant="primary">
          //       {" "}
          //       Image URL: {this.props.moviesData[0].image_url}
          //     </ListGroup.Item>
          //     <ListGroup.Item variant="info">
          //       {" "}
          //       Popularity: {this.props.moviesData[0].popularity}
          //     </ListGroup.Item>
          //     <ListGroup.Item variant="primary">
          //       {" "}
          //       Date of Release: {this.props.moviesData[0].released_on}
          //     </ListGroup.Item>
          //   </ListGroup>
          // )}
          // {this.props.showMovies === false && (
          //   <ListGroup>
          //     <ListGroup.Item action variant="danger">
          //       {this.props.moviesData}
          //     </ListGroup.Item>
          //   </ListGroup>
        }
      </Row>
    );
  }
}
export default Movies;
