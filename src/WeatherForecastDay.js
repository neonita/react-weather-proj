import React from "react";
import FormattedIcons from "./FormattedIcons";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.forecastData.temp.max);
    return temp;
  }

  function minTemp() {
    let temp = Math.round(props.forecastData.temp.min);
    return temp;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <FormattedIcons
          iconId={props.forecastData.weather[0].id}
          icon={props.forecastData.weather[0].icon}
        />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemp()}&#176;
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemp()}&#176;
        </span>
      </div>
    </div>
  );
}
