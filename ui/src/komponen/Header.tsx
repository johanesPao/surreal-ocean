// Global css akan mendefinisikan global property seperti font-family
import "../css/Global.css";
import "../css/komponen/Header.css";

import TeksKetikan from "./TeksKetikan";
import { HeaderProps } from "../props/Header.props";

const defaultHeaderProps: HeaderProps = {
  nama: {
    teks: "Nama",
  },
  jabatan: {
    teks: "Jabatan",
  },
  infoDeskripsi: {
    teks: "Penjelasan singkat",
  },
};

const Header = ({
  nama = defaultHeaderProps.nama,
  jabatan = defaultHeaderProps.jabatan,
  infoDeskripsi = defaultHeaderProps.infoDeskripsi,
}: HeaderProps) => {
  return (
    <div className="kontainerHeader">
      <TeksKetikan {...nama} />
      <TeksKetikan {...jabatan} />
      <TeksKetikan {...infoDeskripsi} />
    </div>
  );
};

export default Header;
