import { useEffect, useState } from "react";
import { tarikEventRepo, typeGuardGitHubRespon } from "../fungsi/gh_api";
import { EResponGitHub } from "../enum";
import { GitHubEvent } from "../types";

const Proyek = ({ repo, description, workflows }: { repo: string, description?: string, workflows?: string[] }) => {
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
                        setData((hasil as GitHubEvent[]).filter((githubEvent) => { return githubEvent.type === 'PushEvent' })[0])
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
            <div className="flex bg-stone-900 text-xs p-5 rounded-2xl overflow-hidden h-auto">
                {memuat
                    ? <span>Memuat data repository ${repo}...</span>
                    : (kesalahanFetching && (typeof data === 'string'))
                        ? <span>Terjadi kesalahan dalam fetching:<br /><span>{data}</span></span>
                        : (typeof data === 'object')
                        && (
                            <div className="grow">
                                <div className="flex flex-col">
                                    <div className="flex gap-2 items-baseline">
                                        <p className="font-cornerstone text-lg w-full">{data.repo.name}</p>
                                        <p>
                                            <div className={`flex items-center gap-1 ${data.public ? `bg-teks text-stone-900` : `bg-stone-900 text-teks border-teks border`} rounded-lg text-slate-950 px-3 w-auto`}>
                                                <span>
                                                    {data.public ? `public` : `private`}
                                                </span>
                                            </div>
                                        </p>
                                    </div>
                                    <p>Latest commit on {(new Date(`${data.created_at}`)).toLocaleString()}</p>
                                    <p>Commit message {data.payload.commits![0].message}</p>
                                    <p>Commit SHA {data.payload.commits![0].sha}</p>
                                    {(description !== undefined && description !== "") && (
                                        <div className="pt-3 text-sm text-clip">
                                            {description}
                                        </div>
                                    )}
                                    {workflows !== undefined && (workflows.length > 0 && (
                                        <div className="pt-3 flex flex-col gap-2 items-end">
                                            {
                                                workflows.map((workflowFile) => (
                                                    (
                                                        <div className="w-auto" key={workflowFile}>
                                                            <img src={`https://github.com/${import.meta.env.VITE_GH_USER}/${repo}/actions/workflows/${workflowFile}/badge.svg`} />
                                                        </div>
                                                    )
                                                )
                                                )
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Proyek;