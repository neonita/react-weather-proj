import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row ">
        <div className="col-7">
          <div className="row">
            <div className="col-7 forecast-temp">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="fluid"
              />
              <h1>
                {Math.round(props.data.temperature)}
                <span>
                  <a href="/" className="active-link unit">
                    &#176;C
                  </a>
                  |
                  <a href="/" className="unit">
                    &#176;F
                  </a>
                </span>
              </h1>
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
