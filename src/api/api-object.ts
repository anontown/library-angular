export interface IClientAPI {
    id: string,
    name: string,
    url: string,
    user: string | null
    date: string,
    update: string
}
export interface IHistoryAPI {
    id: string,
    topic: string,
    title: string,
    tags: string[],
    text: string,
    mdtext: string,
    date: string,
    hash: string
}
export interface IResAPI {
    id: string,
    topic: string,
    date: string,
    user: string | null,
    name: string,
    text: string,
    mdtext: string,
    reply: string | null,
    deleteFlag: ResDeleteFlag,
    uv: number,
    dv: number,
    hash: string,
    profile: string | null,
    replyCount: number,
    voteFlag: ResVoteFlag | null,
    isReply: boolean | null
}

export type ResVoteFlag = "uv" | "dv" | "not";
export type ResDeleteFlag = "active" | "self" | "vote" | "freeze";

export interface IProfileAPI {
    id: string,
    user: string | null,
    name: string,
    text: string,
    mdtext: string,
    date: string,
    update: string,
    sn: string
}
export interface ITopicAPI {
    id: string,
    title: string,
    tags: string[],
    text: string,
    mdtext: string,
    update: string,
    date: string,
    resCount: number,
    type: TopicType,
    active: boolean
}

export type TopicType = "normal"| "one";
export interface IMsgAPI {
    id: string,
    receiver: string | null,
    text: string,
    mdtext: string,
    date: string
}
export interface ITokenAPI {
    id: string,
    key: string,
    client: string,
    user: string,
    active: boolean,
    date: string
}
export interface IUserAPI {
    id: string,
    sn: string
}

export interface ITokenReqAPI {
    token: string,
    key: string
}