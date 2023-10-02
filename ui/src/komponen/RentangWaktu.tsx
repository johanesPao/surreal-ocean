import { Timeline } from "@mantine/core";
import TeksKetikan from "../komponen/TeksKetikan";
import { EAlignmentRentangWaktu, EWarna } from "../enum";
import { RentangWaktuProps } from "../props/RentangWaktu.props";
import { motion } from "framer-motion";

import "../css/komponen/RentangWaktu.css";

const RentangWaktu = ({
  indeksElemenAktif = 0,
  alignment = EAlignmentRentangWaktu.KIRI,
  ukuranBullet = 20,
  warnaBulletGaris = "#000000",
  lebarGaris = 3,
  radiusBullet = 100,
  pembalikanUrutanItem = false,
  data = [],
}: RentangWaktuProps) => {
  return (
    <motion.div
      style={{
        padding: "2em 5em 2em 5em",
      }}
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Timeline
        active={indeksElemenAktif}
        align={alignment}
        bulletSize={ukuranBullet}
        lineWidth={lebarGaris}
        color={warnaBulletGaris}
        radius={radiusBullet}
        reverseActive={pembalikanUrutanItem}
        styles={{
          // overwrite tema dari modul lain kepada warna huruf
          item: {
            color: EWarna.TEKS,
          },
        }}
      >
        {data.length > 0 &&
          data.map((elemenData) => {
            return (
              <Timeline.Item
                title={<TeksKetikan {...elemenData.title} />}
                bullet={elemenData.kontenBullet}
                lineVariant={elemenData.jenisGaris}
              >
                {elemenData.kontenData}
              </Timeline.Item>
            );
          })}
      </Timeline>
    </motion.div>
  );
};

export default RentangWaktu;
