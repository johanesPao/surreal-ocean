import { create } from "@storybook/theming/create";
import { EWarna } from "../src/enum";

export default create({
  base: "dark",
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Surreal Ocean",
  brandTarget: "_self",

  colorPrimary: EWarna.TEKS,
  colorSecondary: EWarna.TEKS,

  appBg: EWarna.TEKS,
  appContentBg: EWarna.TEKS,

  textColor: EWarna.PRIMER,
  textInverseColor: EWarna.PRIMER,

  barTextColor: EWarna.PRIMER,
  barSelectedColor: EWarna.TERSIER,
  barBg: EWarna.TEKS,

  inputBg: EWarna.TEKS,
  inputTextColor: EWarna.PRIMER,
});
