import { Meta, StoryObj } from "@storybook/react";

import Kontak from "../komponen/Kontak";
import { EWarna } from "../enum";

const warnaNormalProps = {
  warnaIkon: EWarna.PRIMER,
  warnaTeks: EWarna.PRIMER
}

const meta = {
  title: "Surreal Ocean/Komponen/Kontak",
  component: Kontak,
  tags: ["autodocs"],
  argTypes: {
    data: { control: { type: "object" } },
    bgKontak: { control: { type: "color", presetColor: EWarna.TEKS } }
  },
} satisfies Meta<typeof Kontak>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    data: [
      {
        mode: "TELP",
        teks: "(+62) 811 118 3385",
        ...warnaNormalProps
      },
      {
        mode: "GMAIL",
        teks: "johanes.pao",
        ...warnaNormalProps
      },
      {
        mode: "GITHUB",
        teks: "johanesPao",
        ...warnaNormalProps
      },
      {
        mode: "DOCKER",
        teks: "j0hanespao",
        ...warnaNormalProps
      }
    ]
  },
};
