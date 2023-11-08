import { EModeKontak } from "../enum";

export type ModeKontak = keyof typeof EModeKontak;

export interface IkonLabelProps {
  mode?: ModeKontak;
  teks?: string;
  warnaIkon?: string;
  warnaTeks?: string;
}
