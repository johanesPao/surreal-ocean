import Typewriter from "typewriter-effect";

import "../css/Global.css";

interface TeksKetikanProps {
  /**
   * Nilai dari teks yang akan digunakan komponen ini.
   * Bisa berupa string atau array string.
   */
  teks: string | string[];
  /**
   * Nilai kecepatan menulis karakter dalam milidetik.
   */
  kecepatanTulis?: number;
  /**
   * Nilai boolean pengulangan efek ketikan
   */
  loop?: boolean;
  /**
   * Nilai jeda antar loop string
   */
  jedaAntarLoop?: number;
  /**
   * Karakter yang akan digunakan sebagai kursor
   */
  kursor?: string;
  /**
   * Nilai kecepatan menghapus dalam milidetik
   */
  kecepatanHapus?: number;
}

const TeksKetikan = ({
  teks,
  kecepatanTulis = 35,
  loop = false,
  jedaAntarLoop = kecepatanTulis * 30,
  kursor = "",
  kecepatanHapus = 20,
}: TeksKetikanProps) => {
  return (
    <Typewriter
      onInit={(ketikan) => {
        ketikan.changeDelay(kecepatanTulis);
        ketikan.changeDeleteSpeed(kecepatanHapus);
        console.log(typeof teks);
        if (Array.isArray(teks)) {
          for (var [indeks, elemenTeks] of teks.entries()) {
            console.log(indeks, elemenTeks);
            ketikan.typeString(elemenTeks);
            if (indeks !== teks.length - 1) {
              ketikan.pauseFor(kecepatanTulis);
              ketikan.deleteAll();
            } else {
              ketikan.pauseFor(jedaAntarLoop);
            }
            ketikan.start();
          }
        } else {
          ketikan.typeString(teks);
          ketikan.start();
        }
      }}
      options={{
        cursor: kursor,
        loop,
      }}
    />
  );
};

export default TeksKetikan;
