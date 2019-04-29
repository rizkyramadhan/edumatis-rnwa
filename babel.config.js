module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@app": "./src/app",
          "@component": "./src/app"
        }
      }
    ]
  ]
};
