import { Team } from ".";

export default {
  title: "Components/Team",
  component: Team,
  argTypes: {
    property1: {
      options: ["team-state3", "team-state2", "team-state1", "team-state4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "team-state3",
    className: {},
    overlapGroupClassName: {},
    overlapClassName: {},
    overlapClassNameOverride: {},
    overlapGroupClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
