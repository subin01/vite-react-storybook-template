import React from "react";

const Template1 = ({ children, fontWeight = "black", italic }) => {
  const weightClass = fontWeight === "black" ? "" : fontWeight;
  const italicClass = italic ? "italic" : "";
  return (
    <>
      <div className={`h1 ${weightClass} ${italicClass}`}>{children}</div>
      <div className={`h2 ${weightClass} ${italicClass}`}>{children}</div>
      <div className={`h3 ${weightClass} ${italicClass}`}>{children}</div>
      <div className={`h4 ${weightClass} ${italicClass}`}>{children}</div>
      <div className={`h5 ${weightClass} ${italicClass}`}>{children}</div>
      <div className={`h6 ${weightClass} ${italicClass}`}>{children}</div>
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
  const baseClass = "text-";
  const variants = ["xxs", "xs", "sm", "base", "lg", "xl", "xxl"];
  return (
    <div className="token-texts-example">
      {variants.map(variant => (
        <article
          key={variant}
          className={`${baseClass}${variant} ${weightClass} ${italicClass}`}
        >
          {children}
        </article>
      ))}
    </div>
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
