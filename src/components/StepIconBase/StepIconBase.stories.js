import { StepIconBase } from ".";

export default {
  title: "Components/StepIconBase",
  component: StepIconBase,
  argTypes: {
    status: {
      options: ["incomplete", "current", "complete"],
      control: { type: "select" },
    },
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
    state: {
      options: ["focused", "hover", "default"],
      control: { type: "select" },
    },
    theme: {
      options: ["mid", "dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "incomplete",
    size: "md",
    state: "focused",
    theme: "mid",
    statusIncompleteClassName: {},
    contentClassName: {},
    dotClassName: {},
  },
};
