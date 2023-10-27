import { useEffect, useState } from "react";
import { tarikEventRepo, typeGuardGitHubRespon } from "../fungsi/gh_api";
import { EResponGitHub } from "../enum";
import { GitHubEvent } from "../types";

const Proyek = ({ repo }: { repo: string }) => {
    const [data, setData] = useState<GitHubEvent[] | string>([]); // Assuming you've defined the Event type as shown before
    const [memuat, setMemuat] = useState(false);
    const [kesalahanFetching, setKesalahanFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setMemuat(true);
                const hasil = await tarikEventRepo(import.meta.env.VITE_GH_USER, repo, import.meta.env.VITE_GH_TOKEN);
                switch (typeGuardGitHubRespon(hasil)) {
                    case EResponGitHub.GITHUB_EVENT: {
                        setData(hasil as GitHubEvent[])
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
                setMemuat(false);
            } catch (error) {
                setKesalahanFetching(true);
            }
        };

        fetchData();
    }, [repo]);

    return (
        <>
            {memuat
                ? (<span>Memuat...</span>)
                : kesalahanFetching
                    ? (<span>Terjadi kesalahan dalam fetching</span>)
                    : Array.isArray(data)
                        ? data.length > 0 && (<span>{data[0].actor.display_login}</span>)
                        : (<span>{data}</span>)

            }
        </>
    )
}

export default Proyek;