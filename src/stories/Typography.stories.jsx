import React from "react";

const Template = ({ label, fontWeight = "black", italic }) => {
  const weightClass = fontWeight === "black" ? "" : fontWeight;
  const italicClass = italic ? "italic" : "";
  return (
    <>
      <div className={`h1 ${weightClass} ${italicClass}`}>{label}</div>
      <div className={`h2 ${weightClass} ${italicClass}`}>{label}</div>
      <div className={`h3 ${weightClass} ${italicClass}`}>{label}</div>
      <div className={`h4 ${weightClass} ${italicClass}`}>{label}</div>
      <div className={`h5 ${weightClass} ${italicClass}`}>{label}</div>
      <div className={`h6 ${weightClass} ${italicClass}`}>{label}</div>
    </>
  );
};

export const Headings = Template.bind({});
Headings.args = {
  label: "GHD Power of Commitment",
  fontWeight: "black",
  italic: false,
};

export default {
  title: "Tokens/Typography",
  argTypes: {
    fontWeight: { control: "select", options: ["black", "regular", "light"] },
  },
};

Headings.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=773%3A32833",
  },
};
