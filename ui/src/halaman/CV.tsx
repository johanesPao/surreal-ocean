import React, { Suspense } from "react";
import { Flex } from "@mantine/core";
import { EAlignmentRentangWaktu, EWarna } from "../enum";
import TeksKetikan from "../komponen/TeksKetikan";
import { HeaderProps } from "../props/Header.props";
import { RentangWaktuProps } from "../props/RentangWaktu.props";
import { KontakProps } from "../props/Kontak.props";

const LazyHeader = React.lazy(() => import("../komponen/Header"));
const LazyTimer = React.lazy(() => import("../komponen/TimerUmur"));
const LazyKontak = React.lazy(() => import("../komponen/Kontak"));
const LazyRentangWaktu = React.lazy(() => import("../komponen/RentangWaktu"));

const CV = () => {
  const headerArgs: HeaderProps = {
    nama: {
      teks: "Johanes Gregorius Indra Pradana Pao",
      className: "header-nama",
    },
    jabatan: {
      teks: [
        "A Loving Husband and Father",
        "Data Enthusiast",
        "Data Visualization",
        "Data Transformation",
        "Data Training",
        "Data Modeling",
      ],
      kursor: "_",
      className: "header-jabatan",
      jedaAntarArray: 1000,
      loop: true,
    },
    infoDeskripsi: {
      teks: `Experienced Senior Business Analyst with a demonstrated history of working in the retail 
    industry. Very skillfull with data preparation, query, transformation and visualization. With ever expanding
    language such as Python, Mojo, R, Typescript and Rust. Also very much in love with Machine Learning
    and Neural Network modeling.`,
      kecepatanTulis: 20,
      className: "header-infoDeskripsi",
    },
  };

  const pendidikanArgs: RentangWaktuProps = {
    indeksElemenAktif: 3,
    alignment: EAlignmentRentangWaktu.KIRI,
    ukuranBullet: 20,
    warnaBulletGaris: EWarna.TEKS,
    lebarGaris: 3,
    radiusBullet: 100,
    pembalikanUrutanItem: false,
    data: [
      {
        title: {
          teks: "1995 - 1997 SD Mardi Yuana I",
          className: "rentang-waktu-judul",
        },
        kontenData: (
          <TeksKetikan teks="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet" />
        ),
      },
      {
        title: {
          teks: "1997 - 2000 SMP Regina Pacis Bogor",
          className: "rentang-waktu-judul",
        },
        kontenData: (
          <TeksKetikan teks="Mencari jati diri dan tidak menemukannya" />
        ),
      },
      {
        title: {
          teks: "2000 - 2003 SMA Regina Pacis Bogor",
          className: "rentang-waktu-judul",
        },
        kontenData: (
          <TeksKetikan teks="Masa - masa jahiliah yang dipenuhi dengan madol, bilyar dan warnet" />
        ),
      },
      {
        title: {
          teks: "2003 - 2009 Universitas Indonesia",
          className: "rentang-waktu-judul",
        },
        kontenData: (
          <TeksKetikan teks="Bertanya - tanya kenapa saya bisa masuk kesana dan kenapa Ekonomi?" />
        ),
        jenisGaris: "dotted",
      },
      {
        title: {
          teks: "2009 - Sekarang",
          className: "rentang-waktu-judul",
        },
        kontenData: (
          <TeksKetikan teks="Terus belajar dan belajar untuk aktualisasi diri" />
        ),
      },
    ],
  };

  const dataKontak: KontakProps["data"] = [
    {
      mode: "TELP",
      teks: "(+62) 811 118 3385",
      warnaIkon: EWarna.PRIMER,
      warnaTeks: EWarna.PRIMER,
    },
    {
      mode: "GMAIL",
      teks: "johanes.pao",
      warnaIkon: EWarna.PRIMER,
      warnaTeks: EWarna.PRIMER,
    },
    {
      mode: "GITHUB",
      teks: "johanesPao",
      warnaIkon: EWarna.PRIMER,
      warnaTeks: EWarna.PRIMER,
    },
    {
      mode: "X",
      teks: "@teh_kotak_lemon",
      warnaIkon: EWarna.PRIMER,
      warnaTeks: EWarna.PRIMER,
    },
  ];

  return (
    <>
      <div className="curr-vitae-bagian-atas" style={{ position: "fixed" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyHeader {...headerArgs} />
          <LazyTimer tahun={1985} bulan={3} hari={3} />
          {/* <LazyKontak data={dataKontak} /> */}
        </Suspense>
      </div>
      <Flex direction="column" justify="center">
          <LazyRentangWaktu {...pendidikanArgs} />
        </Flex>
      {/* <div className="curr-vitae-bagian-konten">
        <Flex direction="column" justify="center">
          <LazyRentangWaktu {...pendidikanArgs} />
        </Flex>
        <Flex direction="column" justify="center">
          <LazyRentangWaktu {...pendidikanArgs} />
        </Flex>
        <Flex direction="column" justify="center">
          <LazyRentangWaktu {...pendidikanArgs} />
        </Flex>
        <Flex direction="column" justify="center">
          <LazyRentangWaktu {...pendidikanArgs} />
        </Flex>
        <Flex direction="column" justify="center">
          <LazyRentangWaktu {...pendidikanArgs} />
        </Flex>
        <Flex direction="column" justify="center">
          <LazyRentangWaktu {...pendidikanArgs} />
        </Flex>
      </div> */}
    </>
  );
};

export default CV;
