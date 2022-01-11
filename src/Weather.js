import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // by default, weatherData is a javascript object, with a "loaded" property of a value of "false".
  const [weatherData, setWeatherData] = useState({ loaded: false });

  // by default, city will be set to defaultCity and will be redefined in the handleCityInput function
  const [city, setCity] = useState(props.defaultCity);

  // handle response
  function handleResponse(response) {
    console.log(response.data);

    // set and define the appropriate data for the weaterData javascript object
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      precipitation: 2,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function search() {
    // api key and url
    const API_KEY = `87af149f244d27dc04db018463afcdae`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    // AJAX call
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  // The conditional is to prevent the API call from being recalled repeatedly. Unecessary repetitive recalls may have the application blocked. It also serves as a loading-display function for the users.
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={handleCityInput}
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

        {/* Component that displays the wheather info's data, passing the weatherData object */}
        <WeatherInfo data={weatherData} />
      </div>
    );
  }
  // Fetches data once a city is searched or window is refreshed and displays "Loading..." while API is fetching for data.
  else {
    search();
    // Returns loading while the API is fetching data
    return `Loading...`;
  }
}
