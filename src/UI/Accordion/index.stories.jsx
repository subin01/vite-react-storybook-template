import React from 'react';
import Accordion from '.';
import accordion from './scripts';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Accordion title',
  children: 'Accordion content',
};

Primary.play = ({ canvasElement }) => {
  accordion.init();
};
