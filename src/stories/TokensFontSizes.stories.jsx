import React from "react";
import { fontSizes } from "./tokens";

export default {
  title: "Tokens/FontSizes",
};

const Template = args => (
  <div>
    {fontSizes.map(s => (
      <div key={s.key} className="token-example">
        <span>{s.key}</span>
        <span>{s.value}</span>
        <div
          style={{
            fontSize: `var(${s.key})`,
          }}
        >
          Lorem ipsum dolor
        </div>
      </div>
    ))}
  </div>
);

export const FontSizes = Template.bind({});

FontSizes.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=854%3A32471",
  },
};
