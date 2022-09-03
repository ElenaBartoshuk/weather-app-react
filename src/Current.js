import React from "react";

export default function Current() {
  return (
    <div className="details">
      <div className="details__row details__row-sun">
        <div className="details__sunrise">
          Sunrise:
          <span className="details__value" id="sunrise"></span>
        </div>
        <div className="details__sunset">
          Sunset:
          <span className="details__value" id="sunset"></span>
        </div>
      </div>
      <div className="details__row details__row-temp">
        <div className="details__high-temp">
          High:
          <span className="details__value" id="high-temp"></span>
        </div>
        <div className="details__low-temp">
          Low:
          <span className="details__value" id="low-temp"></span>
        </div>
      </div>
    </div>
  );
}
