import { ModeKontak } from "./IkonLabel.props";

export interface KontakProps {
  data: dataKontak[];
  bgKontak?: string;
}

interface dataKontak {
  mode?: ModeKontak;
  teks?: string;
  warnaIkon?: string;
  warnaTeks?: string;
}
