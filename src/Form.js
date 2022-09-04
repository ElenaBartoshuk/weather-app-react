import React, { useState } from "react";
import axios from "axios";

import Search from "./images/search-icon.svg";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Form(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(),
      timezone: response.data.timezone,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      feelslike: response.data.main.feels_like,
      tempmax: response.data.main.temp_max,
      tempmin: response.data.main.temp_min,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    });
  }

  console.log(weather.sunrise);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "29d24da46731d2929ff30f83f29c34d7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <>
        <form className="search" id="form" onSubmit={handleSubmit}>
          <div className="icon__before">
            <img src={Search} alt="search icon" />
            <input
              type="search"
              id="city"
              placeholder="Enter a city"
              autoFocus
              autoComplete="off"
              required
              onChange={updateCity}
            />
          </div>
          <button
            className="btn search-btn"
            id="search-btn"
            type="submit"
            autoComplete="off"
          >
            Search
          </button>
          <div className="current-btnicon">
            <button className="btn current-btn" id="current-btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M11 11l1.256 5 3.744-10-10 3.75 5 1.25zm1-11c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z" />
              </svg>
              Current
            </button>
          </div>
        </form>
        <Current data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </>
    );
  } else {
    search();
    return "Loading...";
  }
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
