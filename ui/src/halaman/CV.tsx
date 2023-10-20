/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import {
  EModeBahasa,
  EWarna
} from "../enum";
import { HeaderProps } from "../props/Header.props";
import { KontakProps } from '../props/Kontak.props';
import { RentangWaktuProps } from "../props/RentangWaktu.props";
import '../css/Global.css';
import { KodeProps } from "../props/Kode.props";
import { IconActivityHeartbeat, IconBackpack, IconBellSchool, IconBooks, IconDeviceAnalytics, IconSchool, IconShoppingCartQuestion, IconSortDescendingNumbers, IconTargetArrow, IconTerminal } from "@tabler/icons-react";

import Header from "../komponen/Header";
import TimerUmur from "../komponen/TimerUmur";
import Kontak from "../komponen/Kontak";
import RentangWaktu from "../komponen/RentangWaktu";
import Kode from "../komponen/Kode";
import Footer from '../komponen/Footer';

const CV = () => {
  const headerArgs: HeaderProps = {
    nama: {
      teks: "Johanes Gregorius Indra Pradana Pao",
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
      jedaAntarArray: 1000,
      loop: true,
    },
    infoDeskripsi: {
      teks: `Experienced Senior Business Analyst with a demonstrated history of working in the retail 
    industry. Very skillfull with data preparation, query, transformation and visualization. With ever expanding
    language such as Python, Mojo, R, Typescript and Rust. Also very much in love with Machine Learning
    and Neural Network modeling.`,
      kecepatanTulis: 20,
    },
  };

  const pendidikanArgs: RentangWaktuProps = {
    indeksElemenAktif: 4,
    data: [
      {
        waktu: "1995 - 1997",
        judul: "SD Mardi Yuana I",
        posisi: '',
        konten: '',
        ikon: <IconBellSchool className="text-primer" />,
      },
      {
        waktu: "1997 - 2000",
        judul: "SMP Regina Pacis Bogor",
        posisi: '',
        konten: '',
        ikon: <IconBackpack className="text-primer" />,
      },
      {
        waktu: "2000 - 2003",
        judul: "SMA Regina Pacis Bogor",
        posisi: '',
        konten: '',
        ikon: <IconBooks className="text-primer" />,
      },
      {
        waktu: "2003 - 2009",
        judul: "Universitas Indonesia",
        posisi: '',
        konten: '',
        ikon: <IconSchool className="text-primer" />,
      },
      {
        waktu: "2009 - Ever After",
        judul: "",
        posisi: '',
        konten: 'Lorem ipsum dolor sit amet',
        ikon: <IconActivityHeartbeat className="text-primer" />,
      },
    ],
  };

  const pekerjaanArgs: RentangWaktuProps = {
    indeksElemenAktif: 4,
    data: [
      {
        waktu: "March 2014 - May 2015",
        judul: "PT Vasham Agro Santosa",
        posisi: 'Financial Analyst & FA Supervisor',
        konten: '',
        ikon: <IconTargetArrow className="text-primer" />
      },
      {
        waktu: "June 2015 - December 2017",
        judul: "PT Mitra Adiperkasa Aktif Tbk",
        posisi: 'Senior Business Analyst',
        konten: '',
        ikon: <IconSortDescendingNumbers className="text-primer" />
      },
      {
        waktu: "January 2018 - May 2018",
        judul: "PT Mitra Adiperkasa Aktif Tbk",
        posisi: 'Merchandising Planning Asst. Manager',
        konten: '',
        ikon: <IconShoppingCartQuestion className="text-primer" />
      },
      {
        waktu: "June 2018 - December 2018",
        judul: "PT Minarta Dutahutama",
        posisi: 'System Development Manager',
        konten: '',
        ikon: <IconTerminal className="text-primer" />
      },
      {
        waktu: "January 2019 - Now",
        judul: "PT Prestasi Retail Innovation",
        posisi: 'Senior Business Analyst',
        konten: '',
        ikon: <IconDeviceAnalytics className="text-primer" />
      },
    ],
  };

  const dataKontak: KontakProps["data"] = [
    {
      mode: "TELP",
      teks: "(+62) 811 118 3385",
      warnaIkon: "#2dba4e",
    },
    {
      mode: "GMAIL",
      teks: "johanes.pao",
      warnaIkon: "#c71610",
    },
    {
      mode: "GITHUB",
      teks: "johanesPao",
      warnaIkon: "#ffd166",
    },
    {
      mode: "DOCKER",
      teks: "j0hanespao",
      warnaIkon: "#0db7ed",
    },
    {
      mode: "X",
      teks: "@teh_kotak_lemon",
      warnaIkon: "#6c757d",
    },
  ];

  const kodeArgs: KodeProps = {
    kode: `-- deklarasi dan set variabel
DECLARE @PeriodeAwal AS NVARCHAR(10), @PeriodeAkhir AS NVARCHAR(10)

SET @PeriodeAwal = '2023-01-01'
SET @PeriodeAkhir = '2023-12-31';

SELECT DISTINCT
        oriCode,
        size,
        SUM(Quantity) OVER(PARTITION BY oriCode) [kuantitas]
FROM dummyTable
WHERE
        PostingDate >= @PeriodeAwal AND
        PostingDate <= @PeriodeAKhir
`,
    bahasa: EModeBahasa.SQL
  }

  return (
    <>
      <div className="flex flex-col bg-primer top-0 left-0 w-full sticky z-10 py-0 px-0">
        <div className="px-10 py-3 md:px-32 lg:px-56 xl:px-72">
          <div className="pb-4">
            <Header {...headerArgs} />
          </div>
          <div className="flex justify-center">
            <TimerUmur tahun={1985} bulan={3} hari={3} />
          </div>
        </div>
        <div className="bg-stone-900 py-3 px-10">
          <Kontak data={dataKontak} />
        </div>
      </div>
      <div className="relative top-0 left-0 px-10 md:px-32 lg:px-56 xl:px-72 mt-7 flex flex-row">
        <RentangWaktu {...pendidikanArgs} />
      </div>
      <div className="px-10 md:px-32 lg:px-56 xl:px-72 py-7 flex flex-col font-mono">
        <RentangWaktu {...pekerjaanArgs} />
      </div>
      {/* div bgcolor diset sesuai dengan tema background prism gruvbox untuk mendapatkan efek meluas*/}
      <div className="bg-[#1d2021] px-10 md:px-32 lg:px-56 xl:px-72 py-7 flex flex-col font-mono">
        <Kode {...kodeArgs} />
      </div>
      <div className="px-10 md:px-32 lg:px-56 xl:px-72 py-7 flex flex-col font-mono">
        <Footer />
      </div>
    </>
  );
};

export default CV;
