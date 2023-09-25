import type { Meta, StoryObj } from "@storybook/react";

import Header from "../komponen/Header";

const meta = {
  title: "Surreal Ocean/Komponen/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    nama: { control: { type: "object" } },
    jabatan: { control: { type: "object" } },
    infoDeskripsi: { control: { type: "object" } },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    nama: {
      teks: "Johanes Indra Pradana Pao",
    },
    jabatan: {
      teks: "Senior Business Analyst",
    },
    infoDeskripsi: {
      teks: `Experienced Senior Business Analyst with a demonstrated history of working in the retail 
    industry. Very skillfull with data preparation, query, transformation and visualization. With ever expanding
    language such as Python, Mojo, R, Typescript and Rust. Also very much in love with Machine Learning
    and Neural Network modeling.`,
    },
  },
};

export const SpeedDeskripsi: Story = {
  args: {
    ...Normal.args,
    infoDeskripsi: {
      ...Normal.args.infoDeskripsi,
      kecepatanTulis: 20,
    },
  },
};

export const KursorJabatan: Story = {
  args: {
    ...SpeedDeskripsi.args,
    jabatan: {
      ...SpeedDeskripsi.args.jabatan,
      kursor: "_",
    },
    infoDeskripsi: {
      ...SpeedDeskripsi.args.infoDeskripsi,
      kursor: "_",
    },
  },
};

export const StylingNamaDanInfo: Story = {
  args: {
    ...KursorJabatan.args,
    nama: {
      ...KursorJabatan.args.nama,
      className: "header-nama",
    },
    jabatan: {
      ...KursorJabatan.args.jabatan,
      className: "header-jabatan",
    },
    infoDeskripsi: {
      ...KursorJabatan.args.infoDeskripsi,
      className: "header-infoDeskripsi",
    },
  },
};

export const ArrayTeksJabatan: Story = {
  args: {
    ...StylingNamaDanInfo.args,
    jabatan: {
      ...StylingNamaDanInfo.args.jabatan,
      teks: [
        "A Loving Husband and Father",
        "Friend for Life",
        "Data Enthusiast",
        "Data Analyst",
        "Learning Data Scientist",
        "Senior Business Analyst",
      ],
      jedaAntarArray: 1000,
    },
  },
};

export const LoopJabatan: Story = {
  args: {
    ...ArrayTeksJabatan.args,
    jabatan: {
      ...ArrayTeksJabatan.args.jabatan,
      loop: true,
    },
  },
};
