const withTypescript = require("@zeit/next-typescript");
const withImages = require("next-images");
module.exports = withImages(
  withTypescript({
    webpack: config => {
      // Alias all `react-native` imports to `react-native-web`
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native": "react-native-web"
      };
      return config;
    }
  })
);
