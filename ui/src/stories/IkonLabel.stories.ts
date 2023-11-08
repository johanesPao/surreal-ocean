import { Meta, StoryObj } from "@storybook/react";

import IkonLabel from "../komponen/IkonLabel";
import { EModeKontak, EWarna } from "../enum";
import { properString } from "../fungsi/basic";

const ModeKontak = Object.keys(EModeKontak);

const meta = {
  title: "Surreal Ocean/Komponen/Ikon Label",
  component: IkonLabel,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      options: ModeKontak,
      control: {
        type: "select",
        label: ModeKontak.map((mode) => {
          return properString(mode);
        }).flat(),
      },
    },
    teks: { control: { type: "text" } },
    warnaIkon: { control: { type: "color", presetColor: EWarna.TEKS } },
    warnaTeks: { control: { type: "color", presetColor: EWarna.TEKS } },
  },
} satisfies Meta<typeof IkonLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    mode: "TELP",
    teks: `teks di sini`,
  },
};
