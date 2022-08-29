const customViewports = {
  small: {
    name: "Small",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  medium: {
    name: "Medium",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Large",
    styles: {
      width: "1200px",
      height: "700px",
    },
  },
  xlarge: {
    name: "XLarge",
    styles: {
      width: "1440px",
      height: "850px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    // expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Intro", "Tokens", "UI", "Components", "Pages"],
    },
  },
  viewport: { viewports: customViewports, defaultViewport: "responsive" },
};
