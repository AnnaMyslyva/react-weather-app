import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [fLoaded, setFLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setFLoaded(true);
  }

  if (fLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast.list[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c6da6d296757d783639131d01c953a9f";
    let latitude = props.coordinates.lat;
    let longtitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
