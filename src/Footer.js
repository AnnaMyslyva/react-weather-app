import React from "react";

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
          className="text-success"
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
          className="text-success"
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
          className="text-success"
        >
          on Netify
        </a>
      </p>
    </footer>
  );
}
