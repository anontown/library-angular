import { IHistoryAPI, ResDeleteFlag } from './api-object';
import { AtObjectCache } from './at-object-cache';
export declare class Client {
    private _id;
    private cache;
    constructor(_id: string, cache: AtObjectCache);
    private readonly obj;
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
    private _id;
    private cache;
    constructor(_id: string, cache: AtObjectCache);
    private readonly obj;
    readonly id: string;
    readonly topic: string;
    readonly date: Date;
    readonly user: string | null;
    readonly name: string;
    readonly text: string;
    readonly mdtext: string;
    readonly reply: string | null;
    readonly deleteFlag: ResDeleteFlag;
    readonly vote: number;
    readonly hash: string;
    readonly profile: string | null;
    readonly replyCount: number;
    readonly isVote: boolean | null;
}
export declare class Profile {
    private _id;
    private cache;
    constructor(_id: string, cache: AtObjectCache);
    private readonly obj;
    readonly id: string;
    readonly user: string | null;
    readonly name: string;
    readonly text: string;
    readonly mdtext: string;
    readonly date: Date;
    readonly update: Date;
}
export declare class Topic {
    private _id;
    private cache;
    private _histories;
    constructor(_id: string, cache: AtObjectCache);
    private readonly obj;
    readonly id: string;
    readonly title: string;
    readonly category: string[];
    readonly text: string;
    readonly mdtext: string;
    readonly update: Date;
    readonly date: Date;
    readonly resCount: number;
    readonly histories: History[];
}
export declare class Msg {
    private _id;
    private cache;
    constructor(_id: string, cache: AtObjectCache);
    private readonly obj;
    readonly id: string;
    readonly receiver: string | null;
    readonly text: string;
    readonly mdtext: string;
    readonly date: Date;
}
export declare class Token {
    private _id;
    private cache;
    constructor(_id: string, cache: AtObjectCache);
    private readonly obj;
    readonly id: string;
    readonly key: string;
    readonly client: string;
    readonly user: string;
    readonly active: boolean;
    readonly date: Date;
}
export declare class User {
    private _id;
    private cache;
    constructor(_id: string, cache: AtObjectCache);
    private readonly obj;
    readonly id: string;
    readonly sn: string;
}
