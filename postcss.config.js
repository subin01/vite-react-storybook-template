module.exports = {
  plugins: {
    "postcss-custom-media": {
      importFrom: "src/styles/tokens-breakpoints.css", // => @custom-selector --small-viewport (max-width: 30em);
    },
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
};
