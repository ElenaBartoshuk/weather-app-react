import React from "react";

export default function Forecast(props) {
  return (
    <div className="forecast" id="forecast">
      <div className="forecast__title">Next 5 days forecast:</div>
      <div className="forecast__items" id="forecast"></div>
    </div>
  );
}
