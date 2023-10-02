import { Meta, StoryObj } from "@storybook/react";

import RentangWaktu from "../komponen/RentangWaktu";
import { EAlignmentRentangWaktu, EWarna } from "../enum";
import { RentangWaktuProps } from "../props/RentangWaktu.props";
import TeksKetikan from "../komponen/TeksKetikan";

const meta = {
  title: "Surreal Ocean/Komponen/Rentang Waktu",
  component: RentangWaktu,
  tags: ["autodocs"],
  argTypes: {
    indeksElemenAktif: { control: { type: "number" } },
    alignment: {
      control: "inline-radio",
      options: ["left", "right"],
    },
    ukuranBullet: { control: { type: "number" } },
    warnaBulletGaris: { control: { type: "color", presetColor: "#000000" } },
    lebarGaris: { control: { type: "number" } },
    radiusBullet: { control: { type: "number" } },
    pembalikanUrutanItem: { control: "boolean" },
    data: { control: { type: "object" } },
  },
} satisfies Meta<typeof RentangWaktu>;

const defaultArgs: RentangWaktuProps = {
  indeksElemenAktif: 3,
  alignment: EAlignmentRentangWaktu.KIRI,
  ukuranBullet: 20,
  warnaBulletGaris: EWarna.TERSIER,
  lebarGaris: 3,
  radiusBullet: 100,
  pembalikanUrutanItem: false,
  data: [
    {
      title: {
        teks: "1995 - 1997 SD Mardi Yuana I",
        className: "rentang-waktu-judul",
      },
      kontenData: (
        <TeksKetikan teks="Masa - masa masih ababil dan sangat bocah" />
      ),
    },
    {
      title: {
        teks: "1997 - 2000 SMP Regina Pacis Bogor",
        className: "rentang-waktu-judul",
      },
      kontenData: (
        <TeksKetikan teks="Mencari jati diri dan tidak menemukannya" />
      ),
    },
    {
      title: {
        teks: "2000 - 2003 SMA Regina Pacis Bogor",
        className: "rentang-waktu-judul",
      },
      kontenData: (
        <TeksKetikan teks="Masa - masa jahiliah yang dipenuhi dengan madol, bilyar dan warnet" />
      ),
    },
    {
      title: {
        teks: "2003 - 2009 Universitas Indonesia",
        className: "rentang-waktu-judul",
      },
      kontenData: (
        <TeksKetikan teks="Bertanya - tanya kenapa saya bisa masuk kesana dan kenapa Ekonomi?" />
      ),
      jenisGaris: "dotted",
    },
    {
      title: {
        teks: "2009 - Sekarang",
        className: "rentang-waktu-judul",
      },
      kontenData: (
        <TeksKetikan teks="Terus belajar dan belajar untuk aktualisasi diri" />
      ),
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { ...defaultArgs },
};
