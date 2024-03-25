import React from "react";
import "./Button.css";

function Button() {
  return (
    <div class="button-container">
      <a class="button-link" href="./gallery">
        <p class="button-text">VIEW OUR STUNNING GALLERY</p>
        <div class="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
          >
            <g>
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </g>
          </svg>
        </div>
        <div class="design-element"></div>
      </a>
    </div>
  );
}

export default Button;
