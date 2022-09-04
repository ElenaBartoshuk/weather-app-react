import React from "react";

export default function FormattedSunrise({ sunrise, timezone }) {
  const addZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  let nd = new Date((sunrise + timezone) * 1000),
    hours = addZero(nd.getUTCHours()),
    minutes = addZero(nd.getMinutes());

  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
