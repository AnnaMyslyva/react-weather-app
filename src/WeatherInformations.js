import React from "react";
import RealDate from "./RealDate";

export default function WeatherInformations(props) {
  return (
    <div className="WeatherInformations">
      <h1>{props.wdata.city}</h1>
      <ul>
        <li>
          <RealDate date={props.wdata.date} />
        </li>
        <li className="text-capitalize">{props.wdata.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src={props.wdata.icon}
            alt={props.wdata.description}
            className="float-left"
          />
          <div className="temperature">
            {Math.round(props.wdata.temperature)}ºC
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.wdata.humidity}%</li>
            <li>Wind: {props.wdata.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
