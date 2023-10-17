import { IconBrandGithub, IconDots } from "@tabler/icons-react"
import { RentangWaktuItemProps } from "../props/RentangWaktuItem.props"
import { EWarna } from "../enum"

export const RentangWaktuItem = ({
    waktu,
    judul,
    posisi,
    konten,
    dotted = false,
    ikon = undefined,
    warnaIkonDot = EWarna.PRIMER,
    temaBgIkonDanGaris = "terang",
}: RentangWaktuItemProps) => {
    const varianBgIkon = {
        terang: "bg-teks",
        gelap: "bg-primer"
    };
    const varianGaris = {
        terang: `border-teks`,
        gelap: `border-primer`
    }
    return (
        <div className="">
            <div className="relative pl-5">

                <div className="absolute top-0 left-0">
                    <div className={`w-11 h-11 rounded-full p-2.5 ${varianBgIkon[temaBgIkonDanGaris]}`}>
                        {ikon === undefined ? <IconDots color={warnaIkonDot} /> : ikon}
                    </div>
                </div>
                <div className={`pb-5 static border-l-2 px-9 py-0 flex flex-col overflow-clip ${dotted && `border-dotted`} ${varianGaris[temaBgIkonDanGaris]}`}>
                    <text className="text-teks-400 text-sm font-mono">{waktu}</text>
                    <text className="font-bold font-mono text-lg">{posisi}</text>
                    <text className="text-teks-500 font-mono text-sm">{judul}</text>
                    <text className="font-mono text-sm">{konten}</text>
                </div>
            </div>
        </div>
    )
}