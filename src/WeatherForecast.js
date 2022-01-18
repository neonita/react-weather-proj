import React from "react";
import FormattedIcons from "./FormattedIcons";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row mt-3">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <FormattedIcons iconId="600" icon="13d" />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19&#176;</span>
            <span className="WeatherForecast-temperature-min">10&#176;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
