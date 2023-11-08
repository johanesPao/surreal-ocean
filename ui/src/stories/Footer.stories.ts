import { Meta, StoryObj } from '@storybook/react';
import Footer from '../komponen/Footer';

const meta = {
    title: "Surreal Ocean/Komponen/Footer",
    component: Footer,
    argTypes: {

    }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: {}
}