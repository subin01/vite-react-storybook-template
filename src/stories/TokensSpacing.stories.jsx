import React from "react";
import { spacings } from "./tokens";

export default {
  title: "Tokens/Spacings",
};

const Template = args => (
  <div>
    {spacings.map(s => (
      <div key={s.key} className="token-spacing-example">
        <span>{s.key}</span>
        <span>{s.value}</span>
        <article
          style={{
            width: `var(${s.key})`,
          }}
        ></article>
      </div>
    ))}
  </div>
);

export const Spacings = Template.bind({});

Spacings.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=854%3A32471",
  },
};
