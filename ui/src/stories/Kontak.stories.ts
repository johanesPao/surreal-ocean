import { Meta, StoryObj } from "@storybook/react";

import Kontak from "../komponen/Kontak";

const meta = {
  title: "Surreal Ocean/Komponen/Kontak",
  component: Kontak,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Kontak>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
