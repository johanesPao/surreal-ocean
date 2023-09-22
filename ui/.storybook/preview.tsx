import React from "react";
import type { Preview } from "@storybook/react";
import { MantineProvider, Text } from "@mantine/core";

import Tema from "./Tema";
import { EWarna } from "../src/enum";

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider>
        <div style={{ margin: "3em" }}>
          <Text c={EWarna.SEKUNDER} mb={0} pb={0}>
            area komponen
          </Text>
          <div style={{ margin: 0, border: `1px dashed ${EWarna.SEKUNDER}` }}>
            <Story />
          </div>
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    docs: {
      theme: Tema,
    },
    backgrounds: {
      values: [{ name: "dark", value: EWarna.PRIMER }],
      default: "dark",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
