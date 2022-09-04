import React from "react";

export default function FormattedDate({ date, timezone }) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "Fabruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const addZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  let utc = date.getTime() + date.getTimezoneOffset() * 60000,
    nd = new Date(utc + 1000 * timezone),
    hours = addZero(nd.getHours()),
    minutes = addZero(nd.getMinutes()),
    day = days[nd.getDay()],
    month = months[nd.getMonth()],
    currentDate = nd.getDate();

  return (
    <div>
      {day} {hours}:{minutes}, {month} {currentDate}
    </div>
  );
}
