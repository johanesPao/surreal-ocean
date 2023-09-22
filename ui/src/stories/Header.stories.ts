import type { Meta, StoryObj } from "@storybook/react";

import Header from "../komponen/Header";

const meta = {
  title: "Surreal Ocean/Komponen/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    nama: { control: { type: "text" } },
    jabatan: { control: { type: "text" } },
    infoDeskripsi: { control: { type: "text" } },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    nama: "Johanes Indra Pradana Pao",
    jabatan: "Senior Business Analyst",
    infoDeskripsi: `Experienced Senior Business Analyst with a demonstrated history of working in the retail 
    industry. Very skillfull with data preparation, query, transformation and visualization. With ever expanding
    language such as Python, Mojo, R, Typescript and Rust. Also very much in love with Machine Learning
    and Neural Network modeling.`,
  },
};
