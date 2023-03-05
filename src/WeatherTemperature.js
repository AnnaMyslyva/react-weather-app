import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [weatherunit, setweatherunit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setweatherunit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setweatherunit("celsius");
  }

  function fahrenheit() {
    return Math.round(props.celsius * 9, 5) + 32;
  }

  if (weatherunit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="Wtemperature">{Math.round(props.celsius)}</span>
        <span className="weatherunit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} className="text-success">
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="Wtemperature">{fahrenheit()}</span>
        <span className="weatherunit">
          <a href="/" onClick={convertToCelsius} className="text-success">
            ºC
          </a>
          | ºF
        </span>
      </div>
    );
  }
}
