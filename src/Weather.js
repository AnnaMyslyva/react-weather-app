import React, { useState } from "react";
import axios from "axios";
import RealdDate from "./RealdDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      alreadyLoaded: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.alreadyLoaded) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-search"
          />
          <input type="submit" value="Search" className="text-success" />
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <RealDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-4">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="temperature">
              {Math.round(weatherData.temperature)}ºC
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKEY = "c6da6d296757d783639131d01c953a9f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.searchedCity}&appid=${apiKEY}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading";
  }
}
