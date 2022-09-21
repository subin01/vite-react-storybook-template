import React from "react";

const Template1 = ({ children, fontWeight = "black", italic }) => {
  const weightClass = fontWeight === "black" ? "" : fontWeight;
  const italicClass = italic ? "italic" : "";
  const baseClass = "heading-";
  const variants = ["1", "2", "3", "4", "5", "6"];
  return (
    <>
      {variants.map(variant => (
        <div className="token-example" key={variant}>
          <span>{`.${baseClass}${variant}`}</span>
          <div
            key={variant}
            className={`${baseClass}${variant} ${weightClass} ${italicClass}`}
          >
            {children}
          </div>
        </div>
      ))}
    </>
  );
};

export const Headings = Template1.bind({});

Headings.args = {
  children: "GHD Power of Commitment",
  fontWeight: "black",
  italic: false,
};

Headings.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=773%3A32833",
  },
};

const Template2 = ({ children, fontWeight = "regular", italic }) => {
  const weightClass = fontWeight === "regular" ? "" : fontWeight;
  const italicClass = italic ? "italic" : "";
  const baseClass = "body-";
  const variants = ["1", "2", "3", "4", "5"];
  return (
    <>
      {variants.map(variant => (
        <div className="token-example" key={variant}>
          <span>{`.${baseClass}${variant}`}</span>
          <div
            key={variant}
            className={`${baseClass}${variant} ${weightClass} ${italicClass}`}
          >
            {children}
          </div>
        </div>
      ))}
    </>
  );
};

export const Body = Template2.bind({});
Body.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  fontWeight: "regular",
  italic: false,
};

Body.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/oaPmxA6fmQfoYso9yKXFyn/GHD-Design-System?node-id=773%3A32923",
  },
};

export default {
  title: "Tokens/Typography",
  argTypes: {
    fontWeight: { control: "select", options: ["black", "regular", "light"] },
  },
};
