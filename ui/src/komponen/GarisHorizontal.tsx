import { motion } from "framer-motion";
import { EUkuran, EWarna } from "../enum";
import "../css/Global.css";
import { GarisHorizontalProps } from "../props/GarisHorizontal.props";

const GarisHorizontal = ({
  warna = EWarna.KUARTENER,
  ukuran = EUkuran.KCL,
  tinggi = 2,
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
        scale: [0.1, 0.95, 1],
      }}
      transition={{ delay: 0.2, duration: 1.25 }}
      className="flex justify-center"
    >
      <hr
        className="w-8/12"
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

export default GarisHorizontal;
