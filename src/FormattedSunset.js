import React from "react";

export default function FormattedSunset({ sunset, timezone }) {
  const addZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  let nd = new Date((sunset + timezone) * 1000),
    hours = addZero(nd.getUTCHours()),
    minutes = addZero(nd.getMinutes());

  return (
    <>
      {hours}:{minutes}
    </>
  );
}
