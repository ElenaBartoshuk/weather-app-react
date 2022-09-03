import React from "react";
// import {} from "./images";

export default function Details() {
  return (
    <div className="current">
      <h1 className="current__city" id="current-city">
        Kiev
      </h1>
      <div className="current__date"></div>
      <div className="current__icon">
        {/* <img src="" alt="weather icon" id="icon"> */}
        <div className="curent__item-description" id="description"></div>
      </div>
      <div className="current__items">
        <div className="current__item current__item-humidity">
          Humidity:
          <span className="current__value" id="humidity"></span>
        </div>
        <div className="current__item current__temperature">
          <div className="current__degrees" id="degrees"></div>
          <span className="units">
            {/* <a href="#" id="celcius-link">
              °C
            </a>{" "}
            |
            <a href="#" id="fahrenheit-link">
              °F
            </a> */}
          </span>
          <div className="feels__like">
            Feels like
            <span id="feelslike"></span>
          </div>
        </div>
        <div className="current__item current__item-wind">
          Wind speed:
          <span className="current__value" id="wind"></span>
        </div>
      </div>
    </div>
  );
}
