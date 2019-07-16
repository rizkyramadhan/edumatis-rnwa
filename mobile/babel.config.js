module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        alias: {
          "@app": "./app"
        }
      },

     // "transform-es2015-modules-amd",
    ]
  ]
};
