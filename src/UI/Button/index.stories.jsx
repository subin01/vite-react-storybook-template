import React from "react";

import Button from ".";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    size: { control: "select", options: ["", "small", "large"] },
    icon: { control: "select", options: ["", "arrow"] },
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  secondary: false,
  size: "",
  icon: "",
  disabled: false,
  label: "Button",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=1488%3A60221",
  },
};
