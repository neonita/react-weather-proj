import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  // by default, weatherData is a javascript object, with a "loaded" property of a value of "false".
  const [weatherData, setWeatherData] = useState({ loaded: false });

  // handle response
  function handleResponse(response) {
    console.log(response.data);

    // set and define the appropriate data for the weaterData javascript object
    setWeatherData({
      loaded: true,
      date: `Friday 3:00 p.m`,
      temperature: response.data.main.temp,
      precipitation: 2,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://ssl.gstatic.com/onebox/weather/64/snow_light.png`,
      description: response.data.weather[0].description,
    });
  }

  // The conditional is to prevent the API call from being recalled repeatedly. Unecessary repetitive recalls may have the application blocked. It also serves as a loading-display function for the users.
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        {/* row mx-1 my-3 */}
        <div className="row ">
          <div className="col-7">
            <div className="row">
              <div className="col-7 forecast-temp">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="fluid"
                />
                <h1>
                  {Math.round(weatherData.temperature)}
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
                  <li>Precipitation: {weatherData.precipitation}%</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-5 forecast-city">
            <h4>New York</h4>
            <ul className="forecast-city-details">
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  // Fetches data once a city is searched or window is refreshed and displays "Loading..." while API is fetching for data.
  else {
    // api key and url
    const API_KEY = `87af149f244d27dc04db018463afcdae`;
    let city = `New York`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    // AJAX call
    axios.get(apiUrl).then(handleResponse);

    // Returns loading while the API is fetching data
    return `Loading...`;
  }
}
