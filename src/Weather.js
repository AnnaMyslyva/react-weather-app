import React, { useState } from "react";
import axios from "axios";
import WeatherInformations from "./WeatherInformations";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.searchedCity);
  const [weatherData, setWeatherData] = useState({ alreadyLoaded: false });
  function handleResponse(response) {
    setWeatherData({
      alreadyLoaded: true,
      coords: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKEY = "c6da6d296757d783639131d01c953a9f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.alreadyLoaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-search"
            onChange={handleChangeCity}
          />
          <input type="submit" value="Search" className="text-success, ms-2" />
        </form>
        <WeatherInformations wdata={weatherData} />
        <WeatherForecast coordinates={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
