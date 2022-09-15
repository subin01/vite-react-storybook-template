import React from "react";

import Tag from ".";

export default {
  title: "UI/Article Tag",
  component: Tag,
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: false,
  disabled: false,
  children: "Article Tag",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=1488%3A60221",
  },
};
