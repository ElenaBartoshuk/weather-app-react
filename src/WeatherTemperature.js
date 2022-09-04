import React, { useState } from "react";

export default function WeatherTemperature({ temperature, feelslike, wind }) {
  let [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <>
        <div className="current__item current__temperature">
          <div className="current__degrees">{Math.round(temperature)}</div>
          <span className="units">
            <span className="active"> °C | </span>
            <a
              href="/"
              onClick={showFahrenheit}
              title="Show temperature in Fahrenheit"
            >
              °F
            </a>{" "}
          </span>
          <div className="feels__like">
            Feels like <span>{Math.round(feelslike)}°</span>
          </div>
        </div>
        <div className="current__item current__item-wind">
          Wind speed:{" "}
          <span className="current__value" id="wind">
            {Math.round(wind)} m/s
          </span>
        </div>
      </>
    );
  } else {
    let fahrenheit = Math.round((temperature * 9) / 5 + 32);
    return (
      <>
        <div className="current__item current__temperature">
          <div className="current__degrees">{fahrenheit}</div>
          <span className="units">
            <a
              href="/"
              onClick={showCelcius}
              title="Show temperature in Celsius"
            >
              °C
            </a>{" "}
            <span className="active">| °F </span>
          </span>
          <div className="feels__like">
            Feels like <span>{Math.round((feelslike * 9) / 5 + 32)}°</span>
          </div>
        </div>
        <div className="current__item current__item-wind">
          Wind speed:{" "}
          <span className="current__value">{Math.round(wind * 2.237)} mph</span>
        </div>
      </>
    );
  }
}
