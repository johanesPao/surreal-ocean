import type { Meta, StoryObj } from "@storybook/react";

import CV from "../halaman/CV";

const meta = {
  title: "Surreal Ocean/Halaman/CV",
  component: CV,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CV>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
