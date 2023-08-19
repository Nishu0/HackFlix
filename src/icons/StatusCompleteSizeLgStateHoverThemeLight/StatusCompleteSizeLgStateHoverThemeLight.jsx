/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StatusCompleteSizeLgStateHoverThemeLight = ({ color = "#F4EBFF", fill = "#7F56D9", className }) => {
  return (
    <svg
      className={`status-complete-size-lg-state-hover-theme-light ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_126_184)">
        <rect className="rect" fill={color} height="40" rx="20" width="40" />
        <path
          className="path"
          clipRule="evenodd"
          d="M28.494 12.3167L16.5606 23.8334L13.394 20.45C12.8106 19.9 11.894 19.8667 11.2273 20.3334C10.5773 20.8167 10.394 21.6667 10.794 22.35L14.544 28.45C14.9106 29.0167 15.544 29.3667 16.2606 29.3667C16.944 29.3667 17.594 29.0167 17.9606 28.45C18.5606 27.6667 30.0107 14.0167 30.0107 14.0167C31.5107 12.4834 29.694 11.1334 28.494 12.3V12.3167Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_126_184">
          <rect className="rect" fill="white" height="40" rx="20" width="40" />
        </clipPath>
      </defs>
    </svg>
  );
};

StatusCompleteSizeLgStateHoverThemeLight.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
