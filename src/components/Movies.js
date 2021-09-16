import React, { Component } from "react";
import { Row } from "react-bootstrap";
import MovieSingle from "./MovieSingle";

class Movies extends Component {
  render() {
    return (
      <Row>
        {this.props.moviesData.length !== 0 &&
          this.props.showMovies &&
          this.props.moviesData.map((e) => {
            return (
              <MovieSingle
                title={e.title}
                overview={e.overview}
                votes={e.average_votes}
                total_votes={e.total_votes}
                popularity={e.popularity}
                released_on={e.released_on}
                image_url={e.image_url}
              />
            );
          })}
      </Row>
    );
  }
}
export default Movies;
