import { Meta, StoryObj } from "@storybook/react";

import RentangWaktu from "../komponen/RentangWaktu";
import { RentangWaktuProps } from "../props/RentangWaktu.props";
import TeksKetikan from "../komponen/TeksKetikan";

const meta = {
  title: "Surreal Ocean/Komponen/Rentang Waktu",
  component: RentangWaktu,
  tags: ["autodocs"],
  argTypes: {
    indeksElemenAktif: { control: { type: "number" } },
    data: { control: { type: "object" } },
  },
} satisfies Meta<typeof RentangWaktu>;

const defaultArgs: RentangWaktuProps = {
  indeksElemenAktif: 4,
  data: [
    {
      waktu: "1995 - 1997",
      judul: "SD Mardi Yuana I",
      konten: (
        <TeksKetikan teks="Masa - masa masih ababil dan sangat bocah" />
      ),
      posisi: ''
    },
    {
      waktu: "1997 - 2000",
      judul: "SMP Regina Pacis Bogor",
      konten: (
        <TeksKetikan teks="Mencari jati diri dan tidak menemukannya" />
      ),
      posisi: ''
    },
    {
      waktu: "2000 - 2003",
      judul: "SMA Regina Pacis Bogor",
      konten: (
        <TeksKetikan teks="Masa - masa jahiliah yang dipenuhi dengan madol, bilyar dan warnet" />
      ),
      posisi: ''
    },
    {
      waktu: "2003 - 2009",
      judul: "Universitas Indonesia",
      konten: (
        <TeksKetikan teks="Bertanya - tanya kenapa saya bisa masuk kesana dan kenapa Ekonomi?" />
      ),
      posisi: ''
    },
    {
      waktu: "2009 - Sekarang",
      judul: "",
      konten: (
        <TeksKetikan teks="Terus belajar dan belajar untuk aktualisasi diri" />
      ),
      posisi: ''
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { ...defaultArgs },
};
