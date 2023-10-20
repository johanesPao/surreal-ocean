// Global css akan mendefinisikan global property seperti font-family
import "../css/Global.css";

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
    <div className="">
      <div className="flex text-md font-semibold justify-center">
        <TeksKetikan {...nama} />
      </div>
      <div className="flex text-sm font-mono font-extrabold justify-center">
        <TeksKetikan {...jabatan} />
      </div>
      <div className="md:flex text-xs font-mono justify-center text-center">
        <TeksKetikan {...infoDeskripsi} />
      </div>
    </div>
  );
};

export default Header;
