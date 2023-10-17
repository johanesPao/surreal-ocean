import { RentangWaktuItemProps } from "./RentangWaktuItem.props";

export interface RentangWaktuProps {
  /**
   * Indeks element yang aktif
   */
  indeksElemenAktif?: number;
  /**
   * Data dari rentang waktu yang merupakan array dari interface RentangWaktuItemProps
   */
  data?: RentangWaktuItemProps[];
  temaBgIkonDanGaris?: "terang" | "gelap";
  warnaIkonDot?: string
}
