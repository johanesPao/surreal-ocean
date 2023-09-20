import React from "react";
import type { Preview } from "@storybook/react";

import { themes } from "@storybook/theming";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      values: [{ name: "dark", value: "#242424" }],
      default: "dark",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // layout: "centered",
  },
};

export default preview;
