import { Meta, StoryObj } from '@storybook/react';

import { RentangWaktuItem } from '../komponen/RentangWaktuItem';

const meta = {
    title: "Surreal Ocean/Komponen/RentangWaktuItem",
    component: RentangWaktuItem,
    tags: ["autodocs"],
    argTypes: {}
} satisfies Meta<typeof RentangWaktuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: {}
}