import { About } from ".";

export default {
  title: "Components/About",
  component: About,
  argTypes: {
    property1: {
      options: ["about-state1", "about-state2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "about-state1",
    className: {},
  },
};
