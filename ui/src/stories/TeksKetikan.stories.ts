import type { Meta, StoryObj } from "@storybook/react";

import TeksKetikan from "../komponen/TeksKetikan";

const meta = {
  title: "Surreal Ocean/Komponen/TeksKetikan",
  component: TeksKetikan,
  tags: ["autodocs"],
  argTypes: {
    teks: { control: "object" },
    kecepatanTulis: {
      type: "number",
      min: 0,
      max: 100,
      step: 10,
    },
    loop: { control: "boolean" },
    jedaAntarLoop: {
      type: "number",
      min: 0,
      max: 100,
      step: 10,
    },
    kursor: { control: "text" },
    kecepatanHapus: {
      min: 0,
      max: 100,
      step: 10,
    },
  },
} satisfies Meta<typeof TeksKetikan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    teks: [`Johanes Indra Pradana Pao`, `Alin Afina Widjaja`],
    loop: false,
  },
};
