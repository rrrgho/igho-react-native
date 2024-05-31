module.exports = {
  presets: ["module:@react-native/babel-preset"],
  env: {
    production: {
      plugins: [
        [
          "transform-react-remove-prop-types",
          {
            mode: "wrap",
            ignoreFilenames: ["node_modules"],
          },
        ],
      ],
    },
  },
};
