import React from "react";
// import axios from "axios";
import Form from "./Form";
import Current from "./Current";
import Details from "./Details";
import Forecast from "./Forecast";
import SourceCode from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Form />
          <Current />
          <Details />
          <Forecast />
        </div>
        <SourceCode />
      </div>
    </div>
  );
}

// function getLocation(params) {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("Geolocation is not supported by this browser");
//   }
// }

// function showPosition(position) {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29d24da46731d2929ff30f83f29c34d7&units=metric`;
//   axios.get(url).then(({ data }) => console.log(data));
// }

// return (
//   <div className="App">
//     <button onClick={() => getLocation()}>Search</button>
//   </div>
// );

export default App;
