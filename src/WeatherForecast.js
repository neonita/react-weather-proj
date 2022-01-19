import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast mt-3">
        <div className="row p-2">
          <div className="col">
            <WeatherForecastDay forecastData={forecast[0]} />
            {/* <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <div className="WeatherForecast-icon">
              <FormattedIcons
                iconId={forecast[0].weather[0].id}
                icon={forecast[0].weather[0].icon}
              />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temp.max)}&#176;
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[0].temp.min)}&#176;
              </span>
            </div> */}
          </div>
        </div>
      </div>
    );
  } else {
    // API key and url, longitude and latitude
    let apiKey = `87af149f244d27dc04db018463afcdae`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
