import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.main.temp_max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.main.temp_min);
    return `${temperature}°`;
  }

  function newDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{newDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastMaxTemp">{maxTemp()}</span>|
        <span className="WeatherForecastMinTemp">{minTemp()}</span>
      </div>
    </div>
  );
}
