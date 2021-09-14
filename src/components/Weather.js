import React, { Component } from "react";
// import { Card } from "react-bootstrap";

// class Weather extends Component {
//   render() {
//     {
//       console.log("this is from weather", this.props);
//     }

//     return (
//       <div>
//         {this.props.weatherData.map((e) => {
//         //   {
//         //     e.valid_date.map((elem) => {
//         //       return <p> {elem} uyasdvyv </p>;
//         //     });
//         //   }
//         <p> Amman </p>
//         })}
//       </div>
//     );
//   }
// }
let Weather = (props) => {
    console.log("this is from weather", props);
  return (
   
    //   props.weatherData.map((e) => {
        // {
        //   e.valid_date.map((elem) => {
        //     <p> {elem} uyasdvyv </p>;
        //   });
        // }
        <p> {props.weatherData} </p>
    //   })
    
//   );
  )}

export default Weather;
