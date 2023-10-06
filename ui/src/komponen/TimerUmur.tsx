import { Center, Flex, Text } from "@mantine/core";
import {
  IconHexagon1Filled,
  IconHexagon3Filled,
  IconHexagon5Filled,
  IconHexagon7Filled,
  IconHexagon9Filled,
  IconHexagonNumber0,
  IconHexagonNumber2,
  IconHexagonNumber4,
  IconHexagonNumber6,
  IconHexagonNumber8,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { EWarna } from "../enum";
import {
  EBahasaTimer,
  IKataTimer,
  IUmur,
  TimerUmurProps,
  bahasaTimerUmur,
} from "../props/TimerUmur.props";

const defaultStyle = {
  kontainer: {
    width: "100%",
    padding: "2em 0em 2em 0em",
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ikon: {
    width: 30,
    height: 30,
    color: EWarna.TEKS,
  },
  teks: {
    fontSize: "13px",
    fontFamily: "Cornerstone",
  },
  kolon: {
    padding: "0em 1em 0em 1em",
    ukuran: {
      fontSize: "20px",
    },
  },
};

const TimerUmur = ({
  tahun,
  bulan,
  hari,
  jam = 0,
  menit = 0,
  bahasa = "en",
}: TimerUmurProps) => {
  // konstruksi tanggal lahir (month pada fungsi built in javascript menggunakan zero indexing)
  const tglLahir = new Date(tahun, bulan - 1, hari, jam, menit);

  let umur: Partial<IUmur> = {
    tahun: 0,
    bulan: 0,
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  };

  const padStringAngka = (angka: number) => {
    return angka.toString().padStart(2, "0");
  };

  const translasi = (teks: string, bahasa: string) => {
    let objekKataTranslasi: Partial<IKataTimer> = {};

    switch (bahasa) {
      case EBahasaTimer.ID:
        objekKataTranslasi = { ...bahasaTimerUmur.id };
        break;
      default:
        objekKataTranslasi = { ...bahasaTimerUmur.en };
        break;
    }

    return objekKataTranslasi[teks];
  };

  const renderIkonAngka = (angka: number, teks: string) => {
    // set angka menjadi string dan padStart
    const stringAngka = padStringAngka(angka);

    return (
      <>
        <div>
          <Flex direction="row">
            <div style={{ paddingBottom: "-1em" }}>
              {[...stringAngka].map((angka) => {
                switch (angka) {
                  case "1":
                    return <IconHexagon1Filled style={defaultStyle.ikon} />;
                  case "2":
                    return <IconHexagonNumber2 style={defaultStyle.ikon} />;
                  case "3":
                    return <IconHexagon3Filled style={defaultStyle.ikon} />;
                  case "4":
                    return <IconHexagonNumber4 style={defaultStyle.ikon} />;
                  case "5":
                    return <IconHexagon5Filled style={defaultStyle.ikon} />;
                  case "6":
                    return <IconHexagonNumber6 style={defaultStyle.ikon} />;
                  case "7":
                    return <IconHexagon7Filled style={defaultStyle.ikon} />;
                  case "8":
                    return <IconHexagonNumber8 style={defaultStyle.ikon} />;
                  case "9":
                    return <IconHexagon9Filled style={defaultStyle.ikon} />;
                  default:
                    return <IconHexagonNumber0 style={defaultStyle.ikon} />;
                }
              })}
            </div>
            <Center>
              <Text
                style={{
                  ...defaultStyle.teks,
                  textAlign: "center",
                  marginBottom: "0em",
                }}
              >
                {translasi(teks, bahasa)}
              </Text>
            </Center>
          </Flex>
        </div>
        {teks !== "detik" && (
          <Flex
            direction="column"
            justify="center"
            align="center"
            style={{ ...defaultStyle.kolon }}
          >
            <Text style={{ ...defaultStyle.kolon.ukuran }}>:</Text>
          </Flex>
        )}
      </>
    );
  };

  const renderTimerSederhana = (angka: number, teks: string) => {
    // set angka menjadi string dan padStart
    const stringAngka = padStringAngka(angka);

    return (
      <>
        {stringAngka}
        {teks !== "detik" && ` : `}
      </>
    );
  };

  const hariPadaBulanSebelumnya = (
    tahun: number,
    bulan: number,
    tglLahir: number
  ) => {
    // inisiasi jumlah hari
    let hariBulanSebelumnya: number = 0;
    // set indeks bulan yang dimulai dari 0 menjadi dimulai dari 1
    const bulanSaatIni = bulan + 1;
    // jika bulanSaatIni adalah 1 (Januari), maka tahunSaatIni perlu dikurangi 1
    const tahunBulanSebelumnya = bulanSaatIni === 1 ? tahun - 1 : tahun;
    // jika bulanSaatIni adalah 1 (Januari), maka bulanSebelumnya adalah 12, selain itu
    // bulanSaatIni - 1
    const bulanSebelumnya = bulanSaatIni === 1 ? 12 : bulanSaatIni - 1;
    // switch case jumlah hari dalam bulan berdasar tahun kabisat atau tidak
    switch (bulanSebelumnya) {
      // bulan dengan jumlah hari 31
      case 1 || 3 || 5 || 7 || 8 || 10 || 12:
        hariBulanSebelumnya = 31;
        break;
      // bulan februari (2) bergantung pada tahun kabisat atau tidak
      case 2:
        hariBulanSebelumnya = tahunBulanSebelumnya % 4 === 0 ? 29 : 28;
        break;
      // bulan - bulan lainnya memiliki jumlah hari 30
      default:
        hariBulanSebelumnya = 30;
        break;
    }
    return hariBulanSebelumnya - tglLahir;
  };

  const jumlahJamHariSebelumnya = (jamLahir: number, menitLahir: number) => {
    return 24 - jamLahir - (menitLahir === 0 ? 0 : 1);
  };

  const [waktu, setWaktu] = useState(umur);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cek jika tanggal lahir tahun ini sudah terlewati atau belum
      // jika belum maka set tahun - 1 (tahun sebelumnya)
      const tglLahirTerakhir = new Date(
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ) >= new Date(new Date().getFullYear(), bulan - 1, hari)
          ? new Date().getFullYear()
          : new Date().getFullYear() - 1,
        bulan - 1,
        hari
      );
      console.log(tglLahirTerakhir, tahun, bulan, hari);
      // rekonstruksi IUmur
      umur = {
        ...umur,
        tahun: tglLahirTerakhir.getFullYear() - tglLahir.getFullYear(),
        bulan:
          // jika tahun pada tglLahirTerakhir dengan new Date() tidak sama,
          // maka tambahkan (12 - tglLahir.getMonth()), jika tidak maka 0
          (tglLahirTerakhir.getFullYear() !== new Date().getFullYear()
            ? 12 - tglLahir.getMonth()
            : 0) +
          new Date().getMonth() -
          tglLahir.getMonth() -
          // jika tanggal pada new Date >= tglLahir, maka 0
          // sebaliknya 1 karena belum genap 1 bulan
          (new Date().getDate() >= tglLahir.getDate() ? 0 : 1),
        hari:
          // sama seperti kasus di atas, jika tanggal hari ini lebih kecil
          // dari tanggal lahir, maka perlu untuk mengetahui jumlah hari
          // pada bulan sebelumnya, ditambah dengan hari pada bulan ini,
          // jika hari ini lebih besar atau sama dengan hari tanggal lahir
          // maka hari ini - hari tanggal lahir sudah mencukupi
          new Date().getDate() >= tglLahir.getDate()
            ? new Date().getDate() - tglLahir.getDate()
            : hariPadaBulanSebelumnya(
                new Date().getFullYear(),
                new Date().getMonth(),
                tglLahir.getDate()
              ) +
              tglLahir.getDate() -
              // jika jam pada new Date() lebih besar dari jam pada tglLahir
              (new Date().getHours() >= tglLahir.getHours()
                ? // evaluasi menit pada new Date() >= tglLahir, jika menit juga sudah lebih
                  // besar sama dengan, maka 0, selain itu 1
                  new Date().getMinutes() >= tglLahir.getMinutes()
                  ? 0
                  : 1
                : // jika jam pada new Date() < dari tglLahir maka kurangi 1 hari
                  1),
        // konteks jam juga perlu melihat jam lahir pengguna
        // jika jam saat ini lebih kecil dari jam lahir pengguna, maka perlu untuk menambahkan
        // jumlah jam yang sudah berlalu pada hari sebelumnya dan jam yang berlalu saat ini
        // dalam konteks jam lahir
        jam:
          (new Date().getHours() >= tglLahir.getHours()
            ? new Date().getHours() - tglLahir.getHours()
            : // jika jam saat ini lebih kecil dari jam kelahiran
              // fallback jumlah jam yang telah lewat pada hari sebelumnya
              // ditambah dengan jam saat ini
              jumlahJamHariSebelumnya(
                tglLahir.getHours(),
                tglLahir.getMinutes()
              ) + new Date().getHours()) -
          // evaluasi  menit saat ini berbanding dengan menit kelahiran
          (new Date().getMinutes() >= tglLahir.getMinutes()
            ? // jika menit saat ini juga sudah melewati menit kelahiran, maka 0
              0
            : // jika menit saat ini belum melewati menit kelahiran, maka kurangi 1 jam
              1),
        // dalam konteks menit, kita hanya perlu melihat jika menit saat ini sudah lebih besar
        // atau sama dengan menit kelahiran
        menit:
          new Date().getMinutes() >= tglLahir.getMinutes()
            ? new Date().getMinutes() - tglLahir.getMinutes()
            : 60 - tglLahir.getMinutes() + new Date().getMinutes(),
        detik: new Date().getSeconds(),
      };
      setWaktu(umur);
    }, 1000);

    return () => clearInterval(interval);
  }, [tahun, bulan, hari]);

  return (
    <div style={defaultStyle.kontainer}>
      <Flex visibleFrom="sm" style={{ display: "flex", flexDirection: "row" }}>
        {Object.entries(waktu).map((itemWaktu) =>
          renderIkonAngka(itemWaktu[1], itemWaktu[0])
        )}
      </Flex>
      <Flex hiddenFrom="sm" style={{ display: "flex", flexDirection: "row" }}>
        {Object.entries(waktu).map((itemWaktu) =>
          renderTimerSederhana(itemWaktu[1], itemWaktu[0])
        )}
      </Flex>
    </div>
  );
};

export default TimerUmur;
