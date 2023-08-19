import { Venue } from ".";

export default {
  title: "Components/Venue",
  component: Venue,
  argTypes: {
    property1: {
      options: ["venue-props", "venue-mouse-enter"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "venue-props",
    className: {},
    rectangle: "/img/rectangle-17-1.png",
    img: "/img/rectangle-17-1.png",
    rectangle1: "/img/rectangle-20-1.png",
    rectangle2: "/img/rectangle-20-1.png",
    rectangle3: "/img/rectangle-20-1.png",
  },
};
