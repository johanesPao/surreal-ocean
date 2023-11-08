import { Meta, StoryObj } from '@storybook/react';
import Proyek from '../komponen/Proyek';

const meta = {
    title: "Surreal Ocean/Komponen/Proyek",
    component: Proyek,
    argTypes: {},
} satisfies Meta<typeof Proyek>

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: {
        repo: ""
    }
}