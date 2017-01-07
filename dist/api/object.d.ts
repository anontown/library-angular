import { IProfileAPI, IResAPI, ITokenAPI, ITopicAPI, IUserAPI, IMsgAPI, IHistoryAPI, IClientAPI, ResDeleteFlag, TopicType } from './api-object';
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
    readonly category: string[];
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
    readonly vote: number;
    readonly hash: string;
    readonly profile: string | null;
    readonly replyCount: number;
    readonly isVote: boolean | null;
}
export declare class Profile {
    private obj;
    constructor(obj: IProfileAPI);
    readonly id: string;
    readonly user: string | null;
    readonly name: string;
    readonly text: string;
    readonly mdtext: string;
    readonly date: Date;
    readonly update: Date;
}
export declare class Topic {
    private obj;
    constructor(obj: ITopicAPI);
    readonly id: string;
    readonly title: string;
    readonly category: string[];
    readonly text: string;
    readonly mdtext: string;
    readonly update: Date;
    readonly date: Date;
    readonly resCount: number;
    readonly type: TopicType;
}
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
