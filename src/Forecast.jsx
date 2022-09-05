import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import { InfinitySpin } from "react-loader-spinner";

export default function Forecast({ coordinates }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState([]);

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
           {forecast
            .filter((dailyForecast, index) => (index > 0 && index < 6))
            .map((dailyForecast, index) => {
              return (
                <div className="forecast__item" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
          }
          )}

        </div>
      </div>
    );
  } else {
    const apiKey = "29d24da46731d2929ff30f83f29c34d7";

    let lon = coordinates.lon;
    let lat = coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <InfinitySpin width="150" color="#0f0766" />;
  }
}
