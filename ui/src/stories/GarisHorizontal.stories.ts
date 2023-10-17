import type { Meta, StoryObj } from "@storybook/react";

import GarisHorizontal from "../komponen/GarisHorizontal";
import { EUkuran } from "../enum";

const meta = {
  title: "Surreal Ocean/Komponen/Garis Horizontal",
  component: GarisHorizontal,
  tags: ["autodocs"],
  argTypes: {
    warna: { control: "color" },
    ukuran: {
      options: Object.values(EUkuran),
    },
    tinggi: {
      control: {
        type: "number",
        min: 1,
        max: 20,
        step: 1,
      },
    },
  },
} satisfies Meta<typeof GarisHorizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Kecil: Story = {
  args: {
    ukuran: EUkuran.KCL,
  },
};

export const Sedang: Story = {
  args: {
    ukuran: EUkuran.SDG,
  },
};

export const Besar: Story = {
  args: {
    ukuran: EUkuran.BSR,
  },
};
