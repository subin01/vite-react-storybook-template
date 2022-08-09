import React from "react";
import { spacings } from "./tokens";

export default {
  title: "Tokens/Spacings",
};

const Template = args => (
  <div>
    {spacings.map(s => (
      <article
        key={s.key}
        style={{
          display: "flex",
          borderBottom: "1px solid #CCC",
          padding: "1rem 0",
        }}
      >
        <div style={{ width: "8em" }}>{s.key}</div>
        <div style={{ width: "8em" }}>{s.value}</div>
        <div
          style={{
            height: s.value,
            width: s.value,
            backgroundColor: "#BFE5D7",
          }}
        ></div>
      </article>
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
