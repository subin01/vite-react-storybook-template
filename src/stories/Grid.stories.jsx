import React from "react";

export default {
  title: "Tokens/Grid",
};

const Template = args => (
  <div className="tokens-grid-example">
    <article className="grid">
      {new Array(12).fill(null).map((_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </article>
  </div>
);

export const Grid = Template.bind({});

Grid.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=854%3A32471",
  },
};
