import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationForm from "./components/LocationForm";
import Location from "./components/Location";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      showData: false,
      location: "",
    };
  }
  handleLocation = (e) => {
    let display_name = e.target.value;
    this.setState({
      display_name: display_name,
      showData: false,
    });
  };
  handleSubmit = (e) => {
    console.log(this.state.location);
    e.preventDefault();
    let select = {
      method: "GET",
      baseURL: `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}&format=json`,
    };
    axios(select).then((res) => {
      let responseData = res.data[0];
      this.setState({
        lon: responseData.lon,
        lat: responseData.lat,
        display_name: responseData.display_name,
      })
      this.setState({
        type: responseData.type,
        location: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=5`,
        showData: true,
      });
    });
  };

  render() {
    return (
      <div>
        <LocationForm
          handleLocation={this.handleLocation}
          handleSubmit={this.handleSubmit}
        />
        <br></br>
        {this.state.showData && (
          <Location
            display_name={this.state.display_name}
            location={this.state.location}
            lat={this.state.lat}
            lon={this.state.lon}
          />
        )}
      </div>
    );
  }
}

export default App;
