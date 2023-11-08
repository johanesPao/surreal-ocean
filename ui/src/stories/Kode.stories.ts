import { Meta, StoryObj } from '@storybook/react';
import Kode from '../komponen/Kode';
import { EModeBahasa } from '../enum';
import { properString } from '../fungsi/basic';

const ModeBahasa = Object.keys(EModeBahasa);

const meta = {
    title: "Surreal Ocean/Komponen/Kode",
    component: Kode,
    tags: ["autodocs"],
    argTypes: {
        kode: { control: { type: "text" } },
        bahasa: {
            options: ModeBahasa,
            control: {
                type: "select",
                label: ModeBahasa.map((mode) => {
                    return properString(mode);
                }).flat()
            }
        }
    }
} satisfies Meta<typeof Kode>;

const bahasaArgs = {
    python: `python`,
    typescript: `typescript`,
    rust: `rust`,
    json: 'json',
    sql: `sql`
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Typescript: Story = {
    args: {
        kode: `import { Meta, StoryObj } from '@storybook/react;`,
        bahasa: bahasaArgs.typescript
    }
}

export const Python: Story = {
    args: {
        kode: `import numpy as np
import tensorflow as tf`,
        bahasa: bahasaArgs.python
    }
}

export const Rust: Story = {
    args: {
        kode: `use db::mongo::{Auth, Document}

let mut arrayAuth: Vector<&str> = Vec::new();`,
        bahasa: bahasaArgs.rust
    }
}

export const JSON: Story = {
    args: {
        kode: `{
    "api": {
        "versi": 2.1,
        "url": "https://dummy.com/api"
    }
}`,
        bahasa: bahasaArgs.json
    }
}

export const SQL: Story = {
    args: {
        kode: `-- deklarasi dan set variabel
DECLARE @PeriodeAwal AS NVARCHAR(10), @PeriodeAkhir AS NVARCHAR(10)

SET @PeriodeAwal = '2023-01-01'
SET @PeriodeAkhir = '2023-12-31';

SELECT DISTINCT
        oriCode,
        size,
        SUM(Quantity) OVER(PARTITION BY oriCode) [kuantitas]
FROM dummyTable
WHERE
        PostingDate >= @PeriodeAwal AND
        PostingDate <= @PeriodeAKhir
`,
        bahasa: bahasaArgs.sql
    },
}