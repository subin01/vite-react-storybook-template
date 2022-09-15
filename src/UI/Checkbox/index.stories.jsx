import React from "react";

import Checkbox from ".";

export default {
  title: "UI/Form Controls/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const Template = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  label: "Option 1",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=1488%3A60221",
  },
};
