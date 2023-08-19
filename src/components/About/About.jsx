/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const About = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-1000001775",
  });

  return (
    <div
      className={`about ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "about-state1" && (
        <>
          <img className="image" alt="Image" src="/img/image-7-2.png" />
          <div className="frame-6">
            <img className="ABOUT-US" alt="About US" src="/img/about-us-2.png" />
            <p className="p">
              Hackflix is a cutting-edge technology company dedicated to transforming the entertainment industry. We
              strive to enhance user experiences, leverage emerging technologies, and redefine how people consume,
              produce, and engage with digital content.
            </p>
          </div>
        </>
      )}

      {state.property1 === "frame-1000001775" && (
        <>
          <div className="frame-7">
            <img className="ABOUT-US" alt="About US" src="/img/about-us-1.png" />
            <p className="p">
              Hackflix is a cutting-edge technology company dedicated to transforming the entertainment industry. We
              strive to enhance user experiences, leverage emerging technologies, and redefine how people consume,
              produce, and engage with digital content.
            </p>
          </div>
          <img className="image-2" alt="Image" src="/img/image-7-1.png" />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        property1: "frame-1000001775",
      };

    case "mouse_enter":
      return {
        ...state,
        property1: "about-state1",
      };
  }

  return state;
}

About.propTypes = {
  property1: PropTypes.oneOf(["about-state1", "frame-1000001775"]),
};
