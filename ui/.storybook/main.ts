import remarkGfm from "remark-gfm";

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", {
    name: "@storybook/addon-essentials",
    options: {
      docs: false,
    },
  }, "@storybook/addon-interactions", {
    name: "@storybook/addon-docs",
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  }, "@storybook/addon-styling", "storybook-dark-mode", "@storybook/addon-styling-webpack", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
