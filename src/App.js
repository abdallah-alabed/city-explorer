import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationForm from "./components/LocationForm";
import Location from "./components/Location";
import axios from "axios";
// import Weather from "./components/Weather";
import { Alert } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      cityData: "",
      displayMap: false,
      errorMessage: false,
      errorCode: "",
      weatherItem: [],
      showWeather: false,
      lat: "",
      lon: "",
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
        errorCode: error,
      });
    }
    
  };

  newName = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>Abdallah's City Explorer</h1>

        <LocationForm handleSubmit={this.handleSubmit} newName={this.newName} />

        {this.state.displayMap && <Location cityData={this.state.cityData} />}

        {this.state.errorMessage && (
          <Alert variant="warning">
            Error Code: {this.state.errorCode.response.status}, please enter a
            suitable city.
          </Alert>
        )}
      </>
    );
  }
}

export default App;
