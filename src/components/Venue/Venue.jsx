/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Venue = ({
  property1,
  className,
  rectangle = "/img/rectangle-17-1.png",
  img = "/img/rectangle-17-1.png",
  rectangle1 = "/img/rectangle-20-1.png",
  rectangle2 = "/img/rectangle-20-1.png",
  rectangle3 = "/img/rectangle-20-1.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "venue-props",
  });

  return (
    <div
      className={`venue ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="venue-images">
        <img
          className="rectangle-10"
          alt="Rectangle"
          src={state.property1 === "venue-props" ? rectangle : "/img/rectangle-16.png"}
        />
        <img
          className="rectangle-11"
          alt="Rectangle"
          src={state.property1 === "venue-props" ? img : "/img/rectangle-17-2.png"}
        />
        <img
          className="rectangle-12"
          alt="Rectangle"
          src={state.property1 === "venue-props" ? rectangle1 : "/img/rectangle-18-2.png"}
        />
        <img
          className="rectangle-13"
          alt="Rectangle"
          src={state.property1 === "venue-props" ? rectangle2 : "/img/rectangle-19-2.png"}
        />
        <img
          className="rectangle-14"
          alt="Rectangle"
          src={state.property1 === "venue-props" ? rectangle3 : "/img/rectangle-20-2.png"}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        property1: "venue-props",
      };

    case "mouse_enter":
      return {
        ...state,
        property1: "venue-mouse-enter",
      };
  }

  return state;
}

Venue.propTypes = {
  property1: PropTypes.oneOf(["venue-props", "venue-mouse-enter"]),
  rectangle: PropTypes.string,
  img: PropTypes.string,
  rectangle1: PropTypes.string,
  rectangle2: PropTypes.string,
  rectangle3: PropTypes.string,
};
