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

const LazyHeader = React.lazy(() => import("../komponen/Header"));
const LazyTimer = React.lazy(() => import("../komponen/TimerUmur"));
const LazyKontak = React.lazy(() => import("../komponen/Kontak"));
const LazyRentangWaktu = React.lazy(() => import("../komponen/RentangWaktu"));
const LazyKode = React.lazy(() => import("../komponen/Kode"));

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
        ikon: <IconBellSchool className="text-primer-200" />,
      },
      {
        waktu: "1997 - 2000",
        judul: "SMP Regina Pacis Bogor",
        posisi: '',
        konten: '',
        ikon: <IconBackpack className="text-primer-200" />,
      },
      {
        waktu: "2000 - 2003",
        judul: "SMA Regina Pacis Bogor",
        posisi: '',
        konten: '',
        ikon: <IconBooks className="text-primer-200" />,
      },
      {
        waktu: "2003 - 2009",
        judul: "Universitas Indonesia",
        posisi: '',
        konten: '',
        ikon: <IconSchool className="text-primer-200" />,
      },
      {
        waktu: "2009 - Ever After",
        judul: "",
        posisi: '',
        konten: 'Lorem ipsum dolor sit amet',
        ikon: <IconActivityHeartbeat className="text-primer-200" />,
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
        ikon: <IconTargetArrow className="text-teks" />
      },
      {
        waktu: "June 2015 - December 2017",
        judul: "PT Mitra Adiperkasa Aktif Tbk",
        posisi: 'Senior Business Analyst',
        konten: '',
        ikon: <IconSortDescendingNumbers className="text-teks" />
      },
      {
        waktu: "January 2018 - May 2018",
        judul: "PT Mitra Adiperkasa Aktif Tbk",
        posisi: 'Merchandising Planning Asst. Manager',
        konten: '',
        ikon: <IconShoppingCartQuestion className="text-teks" />
      },
      {
        waktu: "2003 - 2009",
        judul: "PT Minarta Dutahutama",
        posisi: 'System Development Manager',
        konten: '',
        ikon: <IconTerminal className="text-teks" />
      },
      {
        waktu: "January 2019 - Now",
        judul: "PT Prestasi Retail Innovation",
        posisi: 'Senior Business Analyst',
        konten: '',
        ikon: <IconDeviceAnalytics className="text-teks" />
      },
    ],
    temaBgIkonDanGaris: "gelap",
    warnaIkonDot: EWarna.TEKS
  };

  const dataKontak: KontakProps["data"] = [
    {
      mode: "TELP",
      teks: "(+62) 811 118 3385",
      warnaIkon: "#2dba4e",
      warnaTeks: EWarna.PRIMER,
    },
    {
      mode: "GMAIL",
      teks: "johanes.pao",
      warnaIkon: "#c71610",
      warnaTeks: EWarna.PRIMER,
    },
    {
      mode: "GITHUB",
      teks: "johanesPao",
      warnaIkon: "#ffd166",
      warnaTeks: EWarna.PRIMER,
    },
    {
      mode: "DOCKER",
      teks: "j0hanespao",
      warnaIkon: "#0db7ed",
      warnaTeks: EWarna.PRIMER
    },
    {
      mode: "X",
      teks: "@teh_kotak_lemon",
      warnaIkon: "#6c757d",
      warnaTeks: EWarna.PRIMER,
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
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col bg-teks text-teks-50 top-0 left-0 w-full sticky z-10 py-0 px-0 overflow-hidden">
          <div className="px-10 py-3">
            <div className="pb-4">
              <LazyHeader {...headerArgs} />
            </div>
            <div className="flex justify-center">
              <LazyTimer tahun={1985} bulan={3} hari={3} />
            </div>
          </div>
          <div className="bg-stone-900 py-3 px-10">
            <LazyKontak data={dataKontak} />
          </div>
        </div>
        <div className="relative top-0 left-0 px-10 py-5 flex flex-row overflow-auto max-w-full">
          <LazyRentangWaktu {...pendidikanArgs} />
        </div>
        <div className="bg-teks px-10 py-5 flex flex-col text-primer font-mono overflow-auto max-w-full">
          <LazyRentangWaktu {...pekerjaanArgs} />
        </div>
        <div className="px-10 py-5 flex flex-col font-mono overflow-auto max-w-full">
          <LazyKode {...kodeArgs} />
        </div>
        <div className="px-10 py-5 flex flex-col font-mono overflow-auto max-w-full">
          <LazyKode {...kodeArgs} />
        </div>
        <div className="px-10 py-5 flex flex-col font-mono overflow-auto max-w-full">
          <LazyKode {...kodeArgs} />
        </div>
      </Suspense>
    </>
  );
};

export default CV;
