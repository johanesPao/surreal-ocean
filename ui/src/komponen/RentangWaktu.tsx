import { Timeline } from 'flowbite-react';
import { timelineTheme } from 'flowbite-react/lib/esm/components/Timeline/theme'
import type { FlowbiteTimelineTheme } from 'flowbite-react';
import TeksKetikan from "../komponen/TeksKetikan";
import { EAlignmentRentangWaktu, EWarna } from "../enum";
import { RentangWaktuProps } from "../props/RentangWaktu.props";
import { motion } from "framer-motion";

import "../css/komponen/RentangWaktu.css";
import { SlGraduation } from 'react-icons/sl';
import { RentangWaktuItem } from './RentangWaktuItem';

const TemaRentangWaktu: FlowbiteTimelineTheme = {
  ...timelineTheme,
  item: {
    ...timelineTheme.item,
    point: {
      ...timelineTheme.item.point,
      marker: {
        ...timelineTheme.item.point.marker,
        icon: {
          base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
          wrapper: "absolute -left-0 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 dark:bg-cyan-900 dark:ring-gray-900"
        }
      }
    }
  }
}

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
  console.log(timelineTheme);
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <RentangWaktuItem />
      <RentangWaktuItem />
      <RentangWaktuItem />
      {/* <Timeline theme={TemaRentangWaktu}>
        {data.length > 0 &&
          data.map((elemenData) => {
            return (
              <Timeline.Item>
                <Timeline.Point icon={SlGraduation}
                // {
                // ...TimelnePointProps.theme,
                // marker: {
                //   icon: {
                //     wrapper: "absolute h-6 w-6 items-center justify-center bg-cyan-200 dark:bg-cyan-900 dark:ring-gray-900"
                //   }
                // }
                // }
                />
                <Timeline.Content>
                  <Timeline.Time>
                    February 2022
                  </Timeline.Time>
                  <Timeline.Title>
                    <TeksKetikan {...elemenData.title} />
                  </Timeline.Title>
                  <Timeline.Body>
                    {elemenData.kontenData}
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
      </Timeline> */}
    </motion.div>
  );
};

export default RentangWaktu;
