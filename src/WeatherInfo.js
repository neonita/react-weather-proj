import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedIcons from "./FormattedIcons";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row ">
        <div className="col-7">
          <div className="row">
            <div className="col-7 forecast-temp">
              {/* weather icon component  */}
              <div className="float-left">
                <FormattedIcons iconId={props.data.id} icon={props.data.icon} />
              </div>

              <WeatherTemperature celsius={props.data.temperature} />
            </div>

            <div className="col-5 forecast-temp-details">
              <ul>
                <li>Precipitation: {props.data.precipitation}%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-5 forecast-city">
          <h4>{props.data.city}</h4>
          <ul className="forecast-city-details">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
