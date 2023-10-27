export type GitHubRespon = GitHubEvent[] | GitHubNotFound;

export type GitHubEvent = {
    actor: EventActor,
    created_at: string,
    id: string,
    payload: Partial<EventPayload>,
    public: boolean,
    repo: EventRepo,
    type: string
}

type EventActor = {
    avatar_url: string,
    display_login: string,
    gravatar_id: string,
    id: number,
    login: string,
    url: string
}

type EventPayload = {
    description: string | null,
    master_branch: string,
    pusher_type: string,
    ref_type: string,
    before: string,
    commits: EventCommit[],
    distinct_size: number,
    head: string,
    push_id: number,
    ref: string,
    repository_id: number,
    size: number
}

type EventCommit = {
    author: EventCommitAuthor,
    distinct: boolean,
    message: string,
    sha: string,
    url: string
}

type EventCommitAuthor = {
    email: string,
    name: string
}

type EventRepo = {
    id: number,
    name: string,
    url: string
}

type GitHubNotFound = {
    documentation_url: string,
    message: string
}