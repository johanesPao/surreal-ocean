export interface RentangWaktuItemProps {
    waktu: React.ReactNode,
    judul: React.ReactNode,
    posisi: React.ReactNode,
    konten: React.ReactNode,
    dotted?: boolean,
    ikon?: JSX.Element,
    warnaIkonDot?: string,
    temaBgIkonDanGaris?: "terang" | "gelap",
}