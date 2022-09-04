import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast({ coordinates }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  if (loaded) {
    return (
      <div className="forecast">
        <div className="forecast__title">Next 5 days forecast:</div>
        <div className="forecast__items">
          {forecast.map((dailyForecast, index) => {
            if (index > 0 && index < 6) {
              return (
                <div className="forecast__item" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
            else { return null; }
          }
          )}

          {/* {forecast
            .filter((dailyForecast, index) => (dailyForecast[index] > 0 && dailyForecast[index] < 6))
            .map((dailyForecast, index) => {
              return (
                <div className="forecast__item" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
          }
          )} */}

        </div>
      </div>
    );
  } else {
    const apiKey = "29d24da46731d2929ff30f83f29c34d7";

    let lon = coordinates.lon;
    let lat = coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading forecast";
  }
}
