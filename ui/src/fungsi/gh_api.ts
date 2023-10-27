import { EResponGitHub } from "../enum";
import { GitHubRespon } from "../types";

export const tarikEventRepo = async (user: string, repo: string, token: string) => {
    const respon = await fetch(`${import.meta.env.VITE_LOKAL_API}/api/gh/${user}/${repo}/event`, {
        method: 'GET',
        headers: {
            "Authorization": `${token}`,
        }
    })

    if (respon.ok) {
        const data: GitHubRespon = await respon.json();
        console.log(data);
        return data;
    } else {
        throw new Error(`Gagal fetch data dari API. Status: ${respon.status}`)
    }
}

export const typeGuardGitHubRespon = (respon: GitHubRespon) => {
    if (Array.isArray(respon) && respon.length > 0 && respon[0].type.includes("Event")) {
        // respon adalah GitHubEvent[]
        return EResponGitHub.GITHUB_EVENT;
    } else if ('message' in respon && respon.message.includes("Not Found")) {
        // respon adalah GitHubNotFound
        return EResponGitHub.GITHUB_NOT_FOUND;
    } else {
        return EResponGitHub.GITHUB_FORMAT_UNKNOWN;
        // , `Format tidak dikenal ${respon}`
    }
}