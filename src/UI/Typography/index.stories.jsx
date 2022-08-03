import React from 'react';

import Typography from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tokens/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=1368%3A48852',
  },
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
