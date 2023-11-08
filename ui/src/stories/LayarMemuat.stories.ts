import { Meta, StoryObj } from '@storybook/react';
import LayarMemuat from '../komponen/LayarMemuat';

const meta = {
    title: 'Surreal Ocean/Komponen/Layar Memuat',
    component: LayarMemuat,
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof LayarMemuat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: {

    }
}