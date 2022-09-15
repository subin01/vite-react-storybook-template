import React from "react";

import Progress from ".";

export default {
  title: "UI/Progress",
  component: Progress,
};

const Template = args => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 25,
  children: "25%",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=1488%3A60221",
  },
};
