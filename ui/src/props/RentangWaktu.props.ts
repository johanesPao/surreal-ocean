import React from "react";
import { EAlignmentRentangWaktu } from "../enum";
import { TeksKetikanProps } from "./TeksKetikan.props";

export interface RentangWaktuProps {
  /**
   * Indeks element yang aktif
   */
  indeksElemenAktif?: number;
  /**
   * Pengaturan alignment kiri atau kanan
   */
  alignment?: EAlignmentRentangWaktu;
  /**
   * Ukuran bullet point
   */
  ukuranBullet?: number;
  /**
   * Warna pada border bullet dan garis, valid CSS color
   */
  warnaBulletGaris?: string;
  /**
   * Lebar garis
   */
  lebarGaris?: number;
  /**
   * Angka valid CSS untuk radius bullet point yang dikonversi ke dalam rem
   */
  radiusBullet?: number;
  /**
   * Mengurutkan item dari bawah ke atas, secara default adalah false
   */
  pembalikanUrutanItem?: boolean;
  /**
   * Data dari rentang waktu yang merupakan array dari interface ParamDataRentangWaktu
   */
  data?: ParamDataRentangWaktu[];
}

interface ParamDataRentangWaktu {
  title: TeksKetikanProps;
  kontenData?: React.ReactNode;
  kontenBullet?: React.ReactNode;
  jenisGaris?: "dashed" | "dotted" | "solid";
}
