import { useEffect, useState } from "react";
import { tarikEventRepo, typeGuardGitHubRespon } from "../fungsi/gh_api";
import { EResponGitHub } from "../enum";
import { GitHubEvent } from "../types";

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
            <div className="flex bg-stone-900 text-xs p-5 rounded-lg">
                {memuat
                    ? <span>Memuat...</span>
                    : (kesalahanFetching && (typeof data === 'string'))
                        ? <span>Terjadi kesalahan dalam fetching:<br /><span>{data}</span></span>
                        : (typeof (data) === 'object')
                            ? (<div>
                                <span>{data.actor.avatar_url}</span>
                                {data.repo.name}
                                {data.public}
                                {data.created_at}
                                {data.payload.commits![0].message}
                                {data.payload.commits![0].sha}
                            </div>)
                            : "Ada deh"
                }
            </div>
        </>
    )
}

export default Proyek;