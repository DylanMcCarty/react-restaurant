import React from "react";

export default function Loading() {
  return (
    <div className="container align-contents-center vh-100">
      <div className="row justify-content-center">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}
