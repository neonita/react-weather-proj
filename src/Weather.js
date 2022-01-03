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
                src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
                alt="mostly cloudy"
                className="fluid"
              />
              <h1>
                -9
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
                <li>Precipitation: 2%</li>
                <li>Humidity: 84%</li>
                <li>Wind: 10 km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5 forecast-city">
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
