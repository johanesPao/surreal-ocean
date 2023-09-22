// Global css akan mendefinisikan global property seperti font-family
import "../css/Global.css";
import "../css/komponen/Header.css";

import { Text } from "@mantine/core";

interface HeaderProps {
  /**
   * Nama pada header
   */
  nama?: string;
  /**
   * Peran atau jabatan saat ini
   */
  jabatan?: string;
  /**
   * Info deskripsi pribadi yang singkat
   */
  infoDeskripsi?: string;
}

const Header = ({
  nama = "Nama",
  jabatan = "Jabatan terakhir",
  infoDeskripsi = "Penjelasan singkat tentang saya",
}: HeaderProps) => {
  return (
    <div className="kontainerHeader">
      <Text
        className="nama"
        fw={600}
        style={{
          fontSize: "24px",
        }}
      >
        {nama}
      </Text>
      <Text
        fw={200}
        className="jabatan"
        style={{
          fontSize: "18px",
        }}
      >
        {jabatan}
      </Text>
      <Text fw={600} className="infoDeskripsi" style={{ fontSize: "12px" }}>
        {infoDeskripsi}
      </Text>
    </div>
  );
};

export default Header;
