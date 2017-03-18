import { IProfileAPI, IResAPI, ITokenAPI, ITopicAPI, IUserAPI, IMsgAPI, IHistoryAPI, IClientAPI, ResDeleteFlag, ResVoteFlag, ITopicForkAPI, ITopicOneAPI, ITopicNormalAPI } from './api-object';
export declare class Client {
    private obj;
    constructor(obj: IClientAPI);
    readonly id: string;
    readonly name: string;
    readonly url: string;
    readonly user: string | null;
    readonly date: Date;
    readonly update: Date;
}
export declare class History {
    private obj;
    constructor(obj: IHistoryAPI);
    readonly id: string;
    readonly topic: string;
    readonly title: string;
    readonly tags: string[];
    readonly text: string;
    readonly mdtext: string;
    readonly date: Date;
    readonly hash: string;
}
export declare class Res {
    private obj;
    constructor(obj: IResAPI);
    readonly id: string;
    readonly topic: string;
    readonly date: Date;
    readonly user: string | null;
    readonly name: string;
    readonly text: string;
    readonly mdtext: string;
    readonly reply: string | null;
    readonly isReply: boolean | null;
    readonly deleteFlag: ResDeleteFlag;
    readonly uv: number;
    readonly dv: number;
    readonly hash: string;
    readonly profile: string | null;
    readonly replyCount: number;
    readonly voteFlag: ResVoteFlag | null;
}
export declare class Profile {
    private obj;
    constructor(obj: IProfileAPI);
    readonly id: string;
    readonly user: string | null;
    readonly sn: string;
    readonly name: string;
    readonly text: string;
    readonly mdtext: string;
    readonly date: Date;
    readonly update: Date;
}
export declare class TopicNormal {
    private obj;
    constructor(obj: ITopicNormalAPI);
    readonly id: string;
    readonly title: string;
    readonly tags: string[];
    readonly text: string;
    readonly mdtext: string;
    readonly update: Date;
    readonly date: Date;
    readonly resCount: number;
    readonly type: "normal";
    readonly active: boolean;
}
export declare class TopicOne {
    private obj;
    constructor(obj: ITopicOneAPI);
    readonly id: string;
    readonly title: string;
    readonly tags: string[];
    readonly text: string;
    readonly mdtext: string;
    readonly update: Date;
    readonly date: Date;
    readonly resCount: number;
    readonly type: "one";
    readonly active: boolean;
}
export declare class TopicFork {
    private obj;
    constructor(obj: ITopicForkAPI);
    readonly id: string;
    readonly title: string;
    readonly parent: string;
    readonly update: Date;
    readonly date: Date;
    readonly resCount: number;
    readonly type: "fork";
    readonly active: boolean;
}
export declare type Topic = TopicOne | TopicNormal | TopicFork;
export declare function newTopic(t: ITopicAPI): Topic;
export declare class Msg {
    private obj;
    constructor(obj: IMsgAPI);
    readonly id: string;
    readonly receiver: string | null;
    readonly text: string;
    readonly mdtext: string;
    readonly date: Date;
}
export declare class Token {
    private obj;
    constructor(obj: ITokenAPI);
    readonly id: string;
    readonly key: string;
    readonly client: string;
    readonly user: string;
    readonly active: boolean;
    readonly date: Date;
}
export declare class User {
    private obj;
    constructor(obj: IUserAPI);
    readonly id: string;
    readonly sn: string;
}
