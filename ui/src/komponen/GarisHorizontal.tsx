import { motion } from "framer-motion";
import { EUkuran, EWarna } from "../enum";
import "../css/komponen/GarisHorizontal.css";

interface GarisHorizontalProps {
  /**
   * Warna dari garis horizontal (default #000000)
   */
  warna?: string;
  /**
   * Ukuran garis horizontal (default "kecil")
   */
  ukuran?: string;
  /**
   * Tinggi garis horizontal (default 1)
   */
  tinggi?: number;
}

export const GarisHorizontal = ({
  warna = EWarna.PRIMER,
  ukuran = EUkuran.KCL,
  tinggi = 1,
  ...props
}: GarisHorizontalProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: [0.2, 1, 0.5, 1, 0.9, 1],
      }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <hr
        className={["GarisHorizontal", `GarisHorizontal-${ukuran}`].join(" ")}
        style={{
          // batasi tinggi garis horizontal antara 1 - 10
          height: tinggi > 10 ? 10 : tinggi < 1 ? 1 : tinggi,
          backgroundColor: warna,
        }}
        {...props}
      />
    </motion.div>
  );
};
