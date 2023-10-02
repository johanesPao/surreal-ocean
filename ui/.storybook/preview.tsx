import "@mantine/core/styles.css";

import React, { useEffect } from "react";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import type { Preview } from "@storybook/react";
import { MantineProvider, useMantineColorScheme, Text } from "@mantine/core";
import { EWarna } from "../src/enum";

import { theme } from "../src/MantineTheme";

const channel = addons.getChannel();

const ColorSchemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? "dark" : "light");

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
};

const preview: Preview = {
  decorators: [
    (renderStory) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
    (renderStory) => (
      <MantineProvider theme={theme}>
        <div style={{ margin: "3em" }}>
          <Text c={EWarna.SEKUNDER} mb={0} pb={0}>
            area komponen
          </Text>
          <div style={{ margin: 0, border: `1px dashed ${EWarna.SEKUNDER}` }}>
            {renderStory()}
          </div>
        </div>
      </MantineProvider>
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
