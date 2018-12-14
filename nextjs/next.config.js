const ConfigWebpackPlugin = require("config-webpack");

module.exports = {
  webpack: config => {
    config.plugins.push(new ConfigWebpackPlugin());

    return config;
  }
};
