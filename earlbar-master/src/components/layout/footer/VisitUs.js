import React from "react";

import "./VisitUs.css";

export default function VisitUs() {
  return (
    <div className="visit-us-container">
      <div className="visit-us-inner-content">
        <h1>Visit The Second Bridge Club</h1>
        <h2>
          Looking for something more lively? Visit our club, Second Bridge!
        </h2>
        <a href="https://secondbridge.co.uk/">
          <button type="button" className="btn-primary-main">
            Visit Second Bridge
          </button>
        </a>
      </div>
    </div>
  );
}
