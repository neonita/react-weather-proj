import react from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row border">
        <div className="col-6">
          <div className="row">
            <div className="col-6 forecast-temp">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="mostly cloudy"
                className="fluid"
              />
              <h1>9&#176;C</h1>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 2%</li>
                <li>Humidity: 84%</li>
                <li>Wind: 10 km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 forecast-city">
          <h4>New York</h4>
          <ul className="forecast-city-details">
            <li>Friday 3:00 p.m</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
