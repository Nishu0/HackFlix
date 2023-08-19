import { HeaderTransition } from ".";

export default {
  title: "Components/HeaderTransition",
  component: HeaderTransition,
  argTypes: {
    property1: {
      options: ["frame-48", "frame-49"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-48",
    propertyFrameClassName: {},
    propertyFrame: "/img/property-1-frame-48.png",
  },
};
