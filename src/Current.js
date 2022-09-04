import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunrise from "./FormattedSunrise";
import FormattedSunset from "./FormattedSunset";

import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function Current({ data }) {
  return (
    <>
      <div className="details">
        <div className="details__row details__row-sun">
          <div className="details__sunrise">
            Sunrise:
            <span className="details__value" id="sunrise">
              <FormattedSunrise
                sunrise={data.sunrise}
                timezone={data.timezone}
              />
            </span>
          </div>
          <div className="details__sunset">
            Sunset:
            <span className="details__value" id="sunset">
              <FormattedSunset sunset={data.sunset} timezone={data.timezone} />
            </span>
          </div>
        </div>
        <div className="details__row details__row-temp">
          <div className="details__high-temp">
            High:
            <span className="details__value" id="high-temp">
              {Math.round(data.tempmax)}°
            </span>
          </div>
          <div className="details__low-temp">
            Low:
            <span className="details__value" id="low-temp">
              {Math.round(data.tempmin)}°
            </span>
          </div>
        </div>
      </div>
      <div className="current">
        <h1 className="current__city" id="current-city">
          {data.city} {data.country}
        </h1>
        <div className="current__date">
          <FormattedDate date={data.date} timezone={data.timezone} />
          {/* <FormattedDate /> */}
        </div>
        <div className="current__icon">
          <WeatherIcon code={data.icon} size={80} />
          <div className="curent__item-description" id="description">
            {data.description}
          </div>
        </div>
        <div className="current__items">
          <div className="current__item current__item-humidity">
            Humidity:
            <span className="current__value" id="humidity">
              {data.humidity} %
            </span>
          </div>
          <div className="current__item current__temperature">
            <div className="current__degrees" id="degrees">
              <WeatherTemperature celsius={data.temperature} />
            </div>
            {/* <span className="units">
            <a href="#" id="celcius-link">
              °C
            </a>{" "}
            |
            <a href="#" id="fahrenheit-link">
              °F
            </a>
          </span> */}
            <div className="feels__like">
              Feels like{" "}
              <span id="feelslike">{Math.round(data.feelslike)}°</span>
            </div>
          </div>
          <div className="current__item current__item-wind">
            Wind speed:
            <span className="current__value" id="wind">
              {Math.round(data.wind)} m/s
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
