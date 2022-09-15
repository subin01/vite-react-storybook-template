import React from "react";

import Tag from ".";

export default {
  title: "UI/Article Tag",
  component: Tag,
  argTypes: {
    selected: { control: false },
    disabled: { control: false },
    children: { control: false },
  },
};

const list = [
  "Tag",
  "Drought",
  "Water",
  "Floods",
  "Rainfall",
  "Agricolture",
  "Aquanomics",
  "Resources",
  "Australia",
  "Global",
  "Weather",
];

const Template = args => (
  <>
    {list.map(t => (
      <Tag>{t}</Tag>
    ))}
  </>
);

export const Multiple = Template.bind({});
Multiple.args = {
  selected: false,
  disabled: false,
  children: "Article Tag",
};

Multiple.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=1488%3A60221",
  },
  controls: { hideNoControlsWarning: true },
};
