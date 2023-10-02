import { Meta, StoryObj } from "@storybook/react";

import IkonLabel from "../komponen/IkonLabel";

const meta = {
  title: "Surreal Ocean/Komponen/Ikon Label",
  component: IkonLabel,
  tags: ["autodocs"],
  argtypes: {},
} satisfies Meta<typeof IkonLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
