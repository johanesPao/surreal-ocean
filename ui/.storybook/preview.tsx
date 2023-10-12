import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import { EWarna } from "../src/enum";
import '../src/index.css';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'dark',
      attributeName: 'data-mode'
    }),
    (renderStory) => (
      <div style={{ margin: "3em" }}>
        <text>
          area komponen
        </text>
        <div style={{ margin: 0, border: `1px dashed ${EWarna.SEKUNDER}` }}>
          {renderStory()}
        </div>
      </div>
    ),
    // (Story) => (
    //   <MantineProvider theme={tema}>
    //     <div style={{ margin: "3em" }}>
    //       <Text c={EWarna.SEKUNDER} mb={0} pb={0}>
    //         area komponen
    //       </Text>
    //       <div style={{ margin: 0, border: `1px dashed ${EWarna.SEKUNDER}` }}>
    //         <Story />
    //       </div>
    //     </div>
    //   </MantineProvider>
    // ),
  ],
  parameters: {
    // docs: {
    //   theme: theme,
    // },
    backgrounds: {
      values: [{ name: "light", value: EWarna.PRIMER }],
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
