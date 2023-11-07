import { useEffect, useState } from "react";
import { tarikEventRepo, typeGuardGitHubRespon } from "../fungsi/gh_api";
import { EResponGitHub } from "../enum";
import { GitHubEvent } from "../types";
import { IconAccessible, IconCheck, IconForbid } from "@tabler/icons-react";

const Proyek = ({ repo }: { repo: string }) => {
    const [data, setData] = useState<GitHubEvent | string>(""); // Assuming you've defined the Event type as shown before
    const [memuat, setMemuat] = useState(false);
    const [kesalahanFetching, setKesalahanFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setMemuat(true);
            const hasil = await tarikEventRepo(import.meta.env.VITE_GH_USER, repo, import.meta.env.VITE_GH_TOKEN);
            if (hasil instanceof Error) {
                setKesalahanFetching(true)
                setData(hasil.message);
            } else {
                switch (typeGuardGitHubRespon(hasil)) {
                    case EResponGitHub.GITHUB_EVENT: {
                        setData((hasil as GitHubEvent[])[0])
                        break;
                    }
                    case EResponGitHub.GITHUB_NOT_FOUND: {
                        setData("Tidak ada data yang ditemukan")
                        break;
                    }
                    default: {
                        setKesalahanFetching(true);
                        break;
                    }
                };
            }
            setMemuat(false);
        };

        fetchData();
    }, [repo]);

    return (
        <>
            <div className="flex bg-stone-900 text-xs p-0 rounded-2xl overflow-hidden h-auto">
                {memuat
                    ? <span>Memuat...</span>
                    : (kesalahanFetching && (typeof data === 'string'))
                        ? <span>Terjadi kesalahan dalam fetching:<br /><span>{data}</span></span>
                        : (typeof data === 'object')
                        && (
                            <div className="flex p-5">
                                <div className="flex flex-col">
                                    <div className="flex gap-2 items-baseline">
                                        <p className="font-cornerstone text-lg">{data.repo.name}</p>
                                        <p>{data.public
                                            ? (
                                                <div className="flex items-center gap-1 bg-green-200 rounded-xl text-slate-950 px-3 w-auto">
                                                    <IconForbid size={12} />
                                                    <span>
                                                        public
                                                    </span>
                                                </div>
                                            )
                                            : (
                                                <IconForbid />
                                            )}
                                        </p>
                                    </div>
                                    <p>Latest commit on {(new Date(`${data.created_at}`)).toLocaleString()}</p>
                                    <p>Commit message {data.payload.commits![0].message}</p>
                                    <p>Commit SHA {data.payload.commits![0].sha}</p>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Proyek;