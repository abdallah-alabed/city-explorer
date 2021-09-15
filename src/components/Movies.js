import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Movies extends Component {
  render() {
    return (
      <>
        {this.props.moviesData.length !== 0 && this.props.showMovies && (
          <ListGroup style={{ width: "40rem" }}>
            <ListGroup.Item variant="info">Top Movie</ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Title:
              {this.props.moviesData[0].title}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              {" "}
              Overview: {this.props.moviesData[0].overview}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Avg Votes: {this.props.moviesData[0].average_votes}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              {" "}
              Total Votes: {this.props.moviesData[0].total_votes}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Image URL: {this.props.moviesData[0].image_url}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              {" "}
              Popularity: {this.props.moviesData[0].popularity}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Date of Release: {this.props.moviesData[0].released_on}
            </ListGroup.Item>
          </ListGroup>
        )}
        {this.props.showMovies === false && (
          <ListGroup>
            <ListGroup.Item action variant="danger">
              {this.props.moviesData}
            </ListGroup.Item>
          </ListGroup>
        )}
      </>
    );
  }
}
export default Movies;
