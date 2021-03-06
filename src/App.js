import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LocationForm from "./components/LocationForm";
import Location from "./components/Location";
import axios from "axios";
import { Alert } from "react-bootstrap";
import "./App.css";
import Weather from "./components/Weather";
import Movies from "./components/Movies";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      cityData: "",
      displayMap: false,
      errorMessage: false,
      errorCode: "",
      weatherData: [],
      showWeather: false,
      lat: "",
      lon: "",
      moviesData: [],
      showMovies: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    let cityUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`;

    try {
      let cityResult = await axios.get(cityUrl);
      this.setState({
        cityData: cityResult.data[0],
        displayMap: true,
        errorMessage: false,
        lat: cityResult.data[0].lat,
        lon: cityResult.data[0].lon,
      });
    } catch (error) {
      this.setState({
        displayMap: false,
        errorMessage: true,
        errorCode: error[0],
      });
    }

    let weatherUrl = `${process.env.REACT_APP_BACKEND_URL}/weather?city=${this.state.searchQuery}&key=${process.env.REACT_APP_WEATHER_API_KEY}`;

    try {
      let weatherResult = await axios.get(weatherUrl);
      console.log(weatherResult);
      this.setState({
        weatherData: weatherResult.data,
        showWeather: true,
      });
    } catch (error) {
      this.setState({
        weatherData: error.response,
        showWeather: false,
      });
    }

    let movieUrl = `${process.env.REACT_APP_BACKEND_URL}/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${this.state.searchQuery}`;

    try {
      let moviesResult = await axios.get(movieUrl);
      console.log(moviesResult);
      this.setState({
        moviesData: moviesResult.data,
        showMovies: true,
      });
    } catch (error) {
      this.setState({
        showMovies: false,
        moviesData: error.response,
      });
    }
  };
  newName = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  render() {
    console.log(this.state.errorMessage);
    return (
      <>
        <h1 class="text-center fst-italic text-decoration-underline">Abdallah's City Explorer</h1>

        <LocationForm handleSubmit={this.handleSubmit} newName={this.newName} />
        <br></br>
        <br></br>

        {!this.state.errorMessage && this.state.displayMap && (
          <Location cityData={this.state.cityData} />
        )}
        <br></br>
        <br></br>

        {!this.state.errorMessage && this.state.showWeather && (
          <Weather weatherData={this.state.weatherData} />
        )}

        {this.state.errorMessage && (
          <Alert variant="warning">
            Error Code:400, please enter a suitable city.
          </Alert>
        )}

        <br></br>
        <br></br>

        {!this.state.errorMessage && this.state.showMovies && (
          <Movies
            moviesData={this.state.moviesData}
            showMovies={this.state.showMovies}
          />
        )}
        
      </>
    );
  }
}

export default App;
