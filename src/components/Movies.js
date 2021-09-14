import React,{Component} from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Movies extends Component {
  render() {
    return (
      <>
        {
        // this.props.moviesData.length !== 0 && this.props.showMovies && (
          <ListGroup>
            <ListGroup.Item variant="info" >Top Movie</ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Title:
              {/* {this.props.moviesData[0].title} */}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              {" "}
              Overview:
              {/* Overview: {this.props.moviesData[0].overview} */}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Avg Votes:
              {/* Average Votes: {this.props.moviesData[0].average_votes} */}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              {" "}
              Total Votes:
              {/* Total Votes: {this.props.moviesData[0].total_votes} */}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Image URL:
              {/* Image Url: {this.props.moviesData[0].image_url} */}
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              {" "}
              Popularity:
              {/* Popularity: {this.props.moviesData[0].popularity} */}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              {" "}
              Date of Release:
              {/* Release Date: {this.props.moviesData[0].released_on} */}
            </ListGroup.Item>
          </ListGroup>
        // )
        }
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