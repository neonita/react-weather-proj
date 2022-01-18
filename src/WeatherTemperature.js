import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1>{Math.round(props.celsius)}</h1>
        <span>
          &#176;C |{" "}
          <a href="/" onClick={showFahrenheit}>
            &#176;F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h1>{Math.round(fahrenheit())}</h1>
        <span>
          <a href="/" onClick={showCelsius}>
            &#176;C{" "}
          </a>
          | &#176;F
        </span>
      </div>
    );
  }
}
