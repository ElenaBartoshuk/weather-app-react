import React, { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

import Search from "./images/search-icon.svg";
import Current from "./Current";
import Forecast from "./Forecast";
import Photos from "./Photos";

export default function Form(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [photos, setPhotos] = useState([]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(searchLocation);
      setPhotos([]);
    }
  }

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

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      search();
    } else {
      alert(`🙌 Please enter a city`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    setCity("");
  }

  function searchLocation(position) {
    let apiKey = "29d24da46731d2929ff30f83f29c34d7";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse).catch(error);
  }

  function search() {
    const apiKey = "29d24da46731d2929ff30f83f29c34d7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(error);

    let pexelsApiKey =
      "563492ad6f91700001000001bc1878da3ccc4a229c4cf2524dd22df8";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${city}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function error(error) {
    if (error) {
      alert(
        `🖍 Please check the spelling of city "${
          city.charAt(0).toUpperCase() + city.slice(1)
        }" name and type it again`
      );
    }
  }

  if (weather.ready) {
    return (
      <>
        <div className="buttons">
          <form className="search" onSubmit={handleSubmit}>
            <div className="icon__before">
              <img src={Search} alt="search icon" />
              <input
                type="search"
                value={city}
                placeholder="Enter a city"
                autoFocus
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <button className="btn search-btn" type="submit" autoComplete="off">
              Search
            </button>
          </form>
          <div className="current-btnicon">
            <button
              className="btn current-btn"
              onClick={() => getLocation()}
              type="submit"
            >
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
        </div>
        <Current data={weather} />
        <Forecast coordinates={weather.coordinates} />
        <Photos photos={photos} />
      </>
    );
  } else {
    search();
    return <InfinitySpin width="150" color="#0f0766" />;
  }
}
