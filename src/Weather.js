import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // by default, weatherData is a javascript object, with a "loaded" property of a value of "false".
  const [weatherData, setWeatherData] = useState({ loaded: false });

  // by default, city will be set to defaultCity and will be redefined in the handleCityInput function
  const [city, setCity] = useState(props.defaultCity);

  // handle response
  function handleResponse(response) {
    // console.log(response.data);

    // set and define the appropriate data for the weaterData javascript object
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      precipitation: 2,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      id: response.data.weather[0].id,
      icon: response.data.weather[0].icon,
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
            <div className="input-group">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control shadow-none"
                onChange={handleCityInput}
                aria-label="Enter a city"
                aria-describedby="button-addon2"
              />

              <button
                type="submit"
                className="btn btn-primary"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Component that displays the wheather info's data, passing the weatherData object */}
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
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
