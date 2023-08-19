/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HeaderTransition = ({
  property1,
  propertyFrameClassName,
  propertyFrame = "/img/property-1-frame-48.png",
}) => {
  return (
    <>
      {property1 === "frame-49" && (
        <div className={`header-transition property-frame ${propertyFrameClassName}`}>
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="div" />
              <div className="rectangle-2" />
            </div>
            <div className="rectangle-3" />
          </div>
        </div>
      )}

      {property1 === "frame-48" && (
        <img className={`header-transition img ${propertyFrameClassName}`} alt="Property frame" src={propertyFrame} />
      )}
    </>
  );
};

HeaderTransition.propTypes = {
  property1: PropTypes.oneOf(["frame-48", "frame-49"]),
  propertyFrame: PropTypes.string,
};
