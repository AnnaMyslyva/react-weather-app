import "./App.css";
import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-left">Weather App</h1>
        <Weather />
        <Footer />
        <button className="btn btn-outline-primary">Hello</button>
      </div>
    </div>
  );
}
