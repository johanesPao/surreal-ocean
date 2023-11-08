import { RentangWaktuProps } from "../props/RentangWaktu.props";
import { motion } from "framer-motion";

// import "../css/komponen/RentangWaktu.css";
import { RentangWaktuItem } from './RentangWaktuItem';
import { EWarna } from "../enum";

const RentangWaktu = ({
  indeksElemenAktif = 0,
  data = [],
  temaBgIkonDanGaris = "terang",
  warnaIkonDot = EWarna.PRIMER
}: RentangWaktuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {
        data.length > 0 &&
        data.map((elemenData, indeks) => {
          return (
            <RentangWaktuItem
              key={indeks}
              waktu={elemenData.waktu}
              judul={elemenData.judul}
              posisi={elemenData.posisi}
              konten={elemenData.konten}
              dotted={indeks >= indeksElemenAktif}
              ikon={elemenData.ikon}
              warnaIkonDot={warnaIkonDot}
              temaBgIkonDanGaris={temaBgIkonDanGaris}
            />
          )
        })
      }
    </motion.div>
  );
};

export default RentangWaktu;
