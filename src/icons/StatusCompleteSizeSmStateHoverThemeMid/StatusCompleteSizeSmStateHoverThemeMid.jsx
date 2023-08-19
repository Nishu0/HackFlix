/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StatusCompleteSizeSmStateHoverThemeMid = ({ color = "#F4EBFF", className }) => {
  return (
    <svg
      className={`status-complete-size-sm-state-hover-theme-mid ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_126_214)">
        <rect className="rect" fill={color} height="24" rx="12" width="24" />
        <path
          className="path"
          clipRule="evenodd"
          d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z"
          fill="#7F56D9"
          fillRule="evenodd"
        />
        <rect
          className="rect"
          height="22.5"
          rx="11.25"
          stroke="#7F56D9"
          strokeWidth="1.5"
          width="22.5"
          x="0.75"
          y="0.75"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_126_214">
          <rect className="rect" fill="white" height="24" rx="12" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

StatusCompleteSizeSmStateHoverThemeMid.propTypes = {
  color: PropTypes.string,
};
