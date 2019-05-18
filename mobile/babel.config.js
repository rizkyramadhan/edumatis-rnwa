module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "transform-es2015-modules-amd",
      "module-resolver",
      {
        alias: {
          "@app": "./app"
        }
      }
    ]
  ]
};
