module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@app": "./app"
        }
      },

     // "transform-es2015-modules-amd",
    ]
  ]
};
