import { Meta, StoryObj } from '@storybook/react';

import { RentangWaktuItem } from '../komponen/RentangWaktuItem';
import { EWarna } from '../enum';
import { IconBrandOffice } from '@tabler/icons-react';

const meta = {
    title: "Surreal Ocean/Komponen/Rentang Waktu Item",
    component: RentangWaktuItem,
    tags: ["autodocs"],
    argTypes: {}
} satisfies Meta<typeof RentangWaktuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: {
        waktu: 'Februari 22, 2023',
        judul: 'SMA Regina Pacis',
        posisi: '',
        konten: 'Lorem ipsum dolor sit amet',
        ikon: <IconBrandOffice color={EWarna.TEKS} />,
        warnaIkonDot: EWarna.PRIMER,
        temaBgIkonDanGaris: "terang"
    }
}