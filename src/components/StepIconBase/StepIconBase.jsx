/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatusCompleteSizeLgStateDefaultThemeMid } from "../../icons/StatusCompleteSizeLgStateDefaultThemeMid";
import { StatusCompleteSizeLgStateHoverThemeLight } from "../../icons/StatusCompleteSizeLgStateHoverThemeLight";
import { StatusCompleteSizeMdStateDefaultThemeLight } from "../../icons/StatusCompleteSizeMdStateDefaultThemeLight";
import { StatusCompleteSizeMdStateHoverThemeMid } from "../../icons/StatusCompleteSizeMdStateHoverThemeMid";
import { StatusCompleteSizeSmStateFocusedThemeDark } from "../../icons/StatusCompleteSizeSmStateFocusedThemeDark";
import { StatusCompleteSizeSmStateHoverThemeMid } from "../../icons/StatusCompleteSizeSmStateHoverThemeMid";
import "./style.css";

export const StepIconBase = ({
  status,
  size,
  state,
  theme,
  statusIncompleteClassName,
  contentClassName,
  dotClassName,
}) => {
  return (
    <>
      {["current", "incomplete"].includes(status) && (
        <div className={`step-icon-base ${size} ${status} ${state} ${theme} ${statusIncompleteClassName}`}>
          <div className={`content ${contentClassName}`}>
            <div className={`dot ${dotClassName}`} />
          </div>
        </div>
      )}

      {size === "sm" && status === "complete" && ["dark", "light"].includes(theme) && (
        <StatusCompleteSizeSmStateFocusedThemeDark
          className="status-complete-size"
          color={
            theme === "dark" && ["default", "focused"].includes(state)
              ? "#7F56D9"
              : theme === "light" && state === "hover"
              ? "#F4EBFF"
              : theme === "dark" && state === "hover"
              ? "#6941C6"
              : "#F9F5FF"
          }
          fill={theme === "dark" ? "white" : "#7F56D9"}
        />
      )}

      {size === "md" && status === "complete" && ["dark", "light"].includes(theme) && (
        <StatusCompleteSizeMdStateDefaultThemeLight
          className="instance-node"
          color={
            theme === "dark" && ["default", "focused"].includes(state)
              ? "#7F56D9"
              : theme === "light" && state === "hover"
              ? "#F4EBFF"
              : theme === "dark" && state === "hover"
              ? "#6941C6"
              : "#F9F5FF"
          }
          fill={theme === "dark" ? "white" : "#7F56D9"}
        />
      )}

      {size === "lg" && status === "complete" && ["dark", "light"].includes(theme) && (
        <StatusCompleteSizeLgStateHoverThemeLight
          className="status-complete-size-2"
          color={
            theme === "dark" && ["default", "focused"].includes(state)
              ? "#7F56D9"
              : theme === "light" && state === "hover"
              ? "#F4EBFF"
              : theme === "dark" && state === "hover"
              ? "#6941C6"
              : "#F9F5FF"
          }
          fill={theme === "dark" ? "white" : "#7F56D9"}
        />
      )}

      {size === "sm" && theme === "mid" && status === "complete" && (
        <StatusCompleteSizeSmStateHoverThemeMid
          className="status-complete-size"
          color={state === "hover" ? "#F4EBFF" : "#F9F5FF"}
        />
      )}

      {size === "md" && theme === "mid" && status === "complete" && (
        <StatusCompleteSizeMdStateHoverThemeMid
          className="instance-node"
          color={state === "hover" ? "#F4EBFF" : "#F9F5FF"}
        />
      )}

      {size === "lg" && theme === "mid" && status === "complete" && (
        <StatusCompleteSizeLgStateDefaultThemeMid
          className="status-complete-size-2"
          color={state === "hover" ? "#F4EBFF" : "#F9F5FF"}
        />
      )}
    </>
  );
};

StepIconBase.propTypes = {
  status: PropTypes.oneOf(["incomplete", "current", "complete"]),
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  state: PropTypes.oneOf(["focused", "hover", "default"]),
  theme: PropTypes.oneOf(["mid", "dark", "light"]),
};
