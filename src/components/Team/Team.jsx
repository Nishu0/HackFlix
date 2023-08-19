/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Team = ({
  property1,
  className,
  overlapGroupClassName,
  overlapClassName,
  overlapClassNameOverride,
  overlapGroupClassNameOverride,
  divClassName,
  divClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "team-state1",
  });

  return (
    <div
      className={`team ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="frame-2">
        <div
          className="frame-3"
          onClick={() => {
            dispatch("click_702");
          }}
        >
          <div className="text-wrapper">TECHNICAL</div>
          <div className="text-wrapper">DESIGNERS</div>
          <div className="text-wrapper">LOGISTIC</div>
          <div className="management">MANAGEMENT</div>
        </div>
        <div className="frame-4">
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="rectangle-6" />
          <div className="rectangle-8" />
          <div className="rectangle-6" />
          <div className="rectangle-9" />
          <div className="rectangle-4" />
        </div>
      </div>
      <div className="team-data">
        <div className="overlap-group-wrapper">
          <div className={`div-wrapper ${overlapGroupClassName}`}>
            <div className="text-wrapper-2">Prashant Bhavsar</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className={`div-wrapper ${overlapClassName}`}>
            <div className="text-wrapper-3">Prashant Bhavsar</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className={`div-wrapper ${overlapClassNameOverride}`}>
            <div className="text-wrapper-2">Prashant Bhavsar</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className={`div-wrapper ${overlapGroupClassNameOverride}`}>
            <div className="text-wrapper-2">Prashant Bhavsar</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className={`div-wrapper ${divClassName}`}>
            <div className="text-wrapper-2">Prashant Bhavsar</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className={`div-wrapper ${divClassNameOverride}`}>
            <div className="text-wrapper-2">Prashant Bhavsar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "team-state1") {
    switch (action) {
      case "click":
        return {
          property1: "team-state2",
        };
    }
  }

  if (state.property1 === "team-state2") {
    switch (action) {
      case "click_702":
        return {
          property1: "team-state3",
        };
    }
  }

  return state;
}

Team.propTypes = {
  property1: PropTypes.oneOf(["team-state3", "team-state2", "team-state1", "team-state4"]),
};
