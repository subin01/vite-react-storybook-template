import React from 'react';

import Button from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  secondary: false,
  label: 'Button',
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=1368%3A48852',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  secondary: true,
};
