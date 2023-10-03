import { Meta, StoryObj } from "@storybook/react";

import TimerUmur from "../komponen/TimerUmur";

const meta = {
  title: "Surreal Ocean/Komponen/Timer Umur",
  component: TimerUmur,
  tags: ["autodocs"],
  argTypes: {
    tahun: { control: { type: "number" } },
    bulan: { control: { type: "number" } },
    hari: { control: { type: "number" } },
    jam: { control: { type: "number" } },
    menit: { control: { type: "number" } },
  },
} satisfies Meta<typeof TimerUmur>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    tahun: 1985,
    bulan: 3,
    hari: 3,
    jam: 4,
    menit: 30,
  },
};
