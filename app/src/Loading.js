import React from "react";

export default function Loading() {
  return (
    <div className="container align-contents-center vh-100">
      <div className="row vh-100 align-content-center justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Good luck trying to read this one buddy, oh yeah you're never gonna know what this says</span>
        </div>
      </div>
    </div>
  );
}
