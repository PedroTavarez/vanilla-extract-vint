const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },

  async viteFinal(config) {
    config.plugins.push(vanillaExtractPlugin());
    config.resolve = {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    };

    return config;
  },
};
