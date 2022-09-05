import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ data }) {
  function maxTemperature() {
    let temperature = Math.round(data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function date() {
    let date = new Date(data.dt * 1000);
    const addZero = (num) => {
      if (num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    };
    let day = addZero(date.getDate());
    let month = addZero(date.getMonth() + 1);
    let formattedDate = `${day}.${month}`;
    return formattedDate;
  }

  return (
    <>
      <div className="forecast__day">{day()}</div>
      <div className="forecast__date">{date()}</div>
      <WeatherIcon code={data.weather[0].icon} size={40} />
      <div className="forecast__description">{data.weather[0].description}</div>
      <div className="forecast__temperature">
        <div className="forecast__temperature-high">{maxTemperature()}°</div>
        <div className="forecast__temperature-low">{minTemperature()}°</div>
      </div>
      <div className="forecast__precipitation">
        Rain:
        <span className="details__value forecast__precipitation-value">
          {Math.round(data.pop * 100)} %
        </span>
      </div>
    </>
  );
}
