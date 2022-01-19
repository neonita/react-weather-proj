import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h1>{Math.round(props.celsius)}</h1>
      <span>&#176;C</span>
    </div>
  );
}
