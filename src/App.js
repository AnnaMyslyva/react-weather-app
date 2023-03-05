import "./App.css";
import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather searchedCity="Munich" />
        <Footer />
      </div>
    </div>
  );
}
