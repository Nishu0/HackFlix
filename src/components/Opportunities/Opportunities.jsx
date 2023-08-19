/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { StepIconBase } from "../StepIconBase";
import "./style.css";

export const Opportunities = ({ className }) => {
  return (
    <div className={`opportunities ${className}`}>
      <div className="points">
        <div className="point-metadata">
          <StepIconBase
            contentClassName="step-icon-base-instance"
            dotClassName="design-component-instance-node"
            size="sm"
            state="default"
            status="current"
            statusIncompleteClassName="icon"
            theme="dark"
          />
          <div className="connector" />
        </div>
        <div className="text-and-supporting">
          <div className="text">Networking Opportunities:</div>
          <p className="supporting-text">
            Connect with like-minded professionals, industry experts, and potential collaborators who share a passion
            for entertainment technology. sounded a very good reason, and Alice was quite pleased to know it. &#39;I
            never thought
          </p>
        </div>
      </div>
      <div className="points">
        <div className="point-metadata">
          <StepIconBase
            contentClassName="icon-3"
            dotClassName="design-component-instance-node"
            size="sm"
            state="default"
            status="current"
            statusIncompleteClassName="icon-2"
            theme="dark"
          />
          <div className="connector" />
        </div>
        <div className="text-and-supporting">
          <div className="text-2">Workshops and Mentorship:</div>
          <p className="supporting-text">
            Attend workshops led by industry veterans, gain valuable insights, and receive guidance from mentors with
            expertise in various aspects of entertainment technology.
          </p>
        </div>
      </div>
      <div className="points">
        <div className="point-metadata">
          <StepIconBase
            contentClassName="icon-3"
            dotClassName="design-component-instance-node"
            size="sm"
            state="default"
            status="current"
            statusIncompleteClassName="icon-2"
            theme="dark"
          />
          <div className="connector" />
        </div>
        <div className="text-and-supporting">
          <div className="text-2">Hackathon Challenges:</div>
          <p className="supporting-text">
            Engage in intense, hands-on coding and design sessions to tackle specific challenges provided by Hackflix.
            Showcase your skills and creativity as you develop prototypes and solutions within a limited timeframe.
          </p>
        </div>
      </div>
      <div className="points">
        <div className="point-metadata">
          <StepIconBase
            contentClassName="icon-3"
            dotClassName="design-component-instance-node"
            size="sm"
            state="default"
            status="current"
            statusIncompleteClassName="icon-2"
            theme="dark"
          />
          <div className="connector" />
        </div>
        <div className="text-and-supporting">
          <div className="text-2">Prizes and Recognition:</div>
          <p className="supporting-text">
            Compete for exciting prizes and recognition for the most innovative and impactful projects. Our panel of
            judges will evaluate submissions based on criteria such as creativity, technical execution, and potential
            for real-world application.
          </p>
        </div>
      </div>
      <div className="points">
        <div className="point-metadata">
          <StepIconBase
            contentClassName="icon-3"
            dotClassName="design-component-instance-node"
            size="sm"
            state="default"
            status="current"
            statusIncompleteClassName="icon-2"
            theme="dark"
          />
        </div>
        <div className="text-and-supporting">
          <div className="text-2">Collaboration and Team Building:</div>
          <p className="supporting-text">
            Form teams and collaborate with other participants to combine diverse skill sets and create groundbreaking
            projects. Embrace the spirit of teamwork and foster new connections throughout the event.
          </p>
        </div>
      </div>
    </div>
  );
};
