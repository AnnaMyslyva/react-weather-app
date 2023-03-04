import React from "react";
import "./Weather.css";

export default function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/AnnaMyslyva/react-weather-app"
          target="_blank"
          rel="noreferrer"
          title="Open-source Code"
          id="gitHubLink"
        >
          Open-source Code {}
        </a>
        {} was coded by {}
        <a
          href="https://www.linkedin.com/in/anna-myslyva-a14879162/"
          target="_blank"
          rel="noreferrer"
          title="Open-source Code"
          id="idLink"
        >
          {} Anna Myslyva {}
        </a>
        {} and is hosted {}
        <a
          href="https://chic-tiramisu-a078ce.netlify.app"
          target="_blank"
          rel="noreferrer"
          title="Open-source Code"
          id="netifyLink"
        >
          on Netify
        </a>
      </p>
    </footer>
  );
}
