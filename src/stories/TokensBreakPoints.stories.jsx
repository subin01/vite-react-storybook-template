import React from "react";
import { breakpoints } from "./tokens";

export default {
  title: "Tokens/BreakPoints",
};

const Template = args => (
  <div>
    {breakpoints.map(s => (
      <div key={s.key} className="token-example">
        <span>{s.key}</span>
        <span>{s.value}</span>
      </div>
    ))}
  </div>
);

export const BreakPoints = Template.bind({});

BreakPoints.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=854%3A32471",
  },
};
