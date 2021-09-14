import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationForm from "./components/LocationForm";
import Location from "./components/Location";
import axios from "axios";
// import { Alert } from "react-bootstrap";
import Weather from "./components/Weather";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      showData: false,
      location: "",
      errorData: "",
      errorStatus: "",
      weatherData:[]
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
    e.preventDefault();
    axios
      .get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}&format=json`
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          alert(
            `Error: ${error.response.status}, Please Enter a Valid geopoint`
          );
        }
      });
   
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
        errorData: "",
        errorStatus: "",
                
      });
      this.setState({
        type: responseData.type,
        location: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=5`,
        showData: true,
      })
    }).then(()=>{
      axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.display_name}`)
      .then(res=>{
        this.setState({
         weatherData: res.data
        })
      })
    })
    
  };



  render() {
    console.log(this.state.weatherData)
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
        <Weather weatherData={this.props.weatherData} />
      </div>
    );
  }
}

export default App;
