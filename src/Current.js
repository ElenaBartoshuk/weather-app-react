import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunrise from "./FormattedSunrise";
import FormattedSunset from "./FormattedSunset";

import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function Current({ data }) {
  return (
    <>
      <div className="current">
        <h1 className="current__city">
          {data.city}, {data.country}
        </h1>
        <div className="current__date">
          <FormattedDate date={data.date} timezone={data.timezone} />
        </div>
        <div className="current__icon">
          <WeatherIcon code={data.icon} size={80} />
          <div className="curent__item-description">{data.description}</div>
        </div>
        <div className="current__items">
          <div className="current__item current__item-humidity">
            Humidity: <span className="current__value">{data.humidity} %</span>
          </div>
          <WeatherTemperature
            temperature={data.temperature}
            feelslike={data.feelslike}
            wind={data.wind}
          />
        </div>
      </div>
      <div className="details">
        <div className="details__row details__row-sun">
          <div className="details__sunrise">
            Sunrise:
            <span className="details__value">
              <FormattedSunrise
                sunrise={data.sunrise}
                timezone={data.timezone}
              />
            </span>
          </div>
          <div className="details__sunset">
            Sunset:
            <span className="details__value">
              <FormattedSunset sunset={data.sunset} timezone={data.timezone} />
            </span>
          </div>
        </div>
        <div className="details__row details__row-temp">
          <div className="details__high-temp">
            High:
            <span className="details__value">{Math.round(data.tempmax)}°</span>
          </div>
          <div className="details__low-temp">
            Low:
            <span className="details__value">{Math.round(data.tempmin)}°</span>
          </div>
        </div>
      </div>
    </>
  );
}
