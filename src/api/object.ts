import {
    IProfileAPI,
    IResAPI,
    ITokenAPI,
    ITopicAPI,
    IUserAPI,
    IMsgAPI,
    IHistoryAPI,
    IClientAPI,
    ResDeleteFlag
} from './api-object';

import { AtObjectCache } from './at-object-cache';

export class Client {
    constructor(private _id: string, private cache: AtObjectCache) {
    }

    private get obj(): IClientAPI {
        return this.cache.getClient(this._id);
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this.obj.name;
    }

    get url(): string {
        return this.obj.url;;
    }

    get user(): string | null {
        return this.obj.user;
    }

    get date(): Date {
        return new Date(this.obj.date);
    }

    get update(): Date {
        return new Date(this.obj.update);
    }
}
export class History {
    constructor(private obj: IHistoryAPI) {
    }

    get id(): string {
        return this.obj.id;
    }

    get topic(): string {
        return this.obj.topic;
    }

    get title(): string {
        return this.obj.title;
    }

    get category(): string[] {
        return this.obj.category;
    }

    get text(): string {
        return this.obj.text;
    }

    get mdtext(): string {
        return this.obj.mdtext;
    }

    get date(): Date {
        return new Date(this.obj.date);
    }

    get hash(): string {
        return this.obj.hash;
    }
}
export class Res {
    constructor(private _id: string, private cache: AtObjectCache) {
    }

    private get obj(): IResAPI {
        return this.cache.getRes(this._id);
    }

    get id(): string {
        return this._id;
    }

    get topic(): string {
        return this.obj.topic;
    }

    get date(): Date {
        return new Date(this.obj.date);
    }

    get user(): string | null {
        return this.obj.user;
    }

    get name(): string {
        return this.obj.name;
    }

    get text(): string {
        return this.obj.text;
    }

    get mdtext(): string {
        return this.obj.mdtext;
    }

    get reply(): string | null {
        return this.obj.reply;
    }

    get deleteFlag(): ResDeleteFlag {
        return this.obj.deleteFlag;
    }

    get vote(): number {
        return this.obj.vote;
    }

    get hash(): string {
        return this.obj.hash;
    }

    get profile(): string | null {
        return this.obj.profile;
    }

    get replyCount(): number {
        return this.obj.replyCount;
    }
}
export class Profile {
    constructor(private _id: string, private cache: AtObjectCache) {
    }

    private get obj(): IProfileAPI {
        return this.cache.getProfile(this._id);
    }

    get id(): string {
        return this._id;
    }

    get user(): string | null {
        return this.obj.user;
    }

    get name(): string {
        return this.obj.name;
    }

    get text(): string {
        return this.obj.text;
    }

    get mdtext(): string {
        return this.obj.mdtext;
    }

    get date(): Date {
        return new Date(this.obj.date);
    }

    get update(): Date {
        return new Date(this.obj.update);
    }
}
export class Topic {
    private _histories: History[];
    constructor(private _id: string, private cache: AtObjectCache) {
        this._histories = this.obj.histories.map(h => new History(h));
    }

    private get obj(): ITopicAPI {
        return this.cache.getTopic(this._id);
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this.obj.title;
    }

    get category(): string[] {
        return this.obj.category;
    }

    get text(): string {
        return this.obj.text;
    }

    get mdtext(): string {
        return this.obj.mdtext;
    }

    get update(): Date {
        return new Date(this.obj.update);
    }

    get date(): Date {
        return new Date(this.obj.date);
    }

    get resCount(): number {
        return this.obj.resCount;
    }

    get histories(): History[] {
        return this._histories;
    }
}
export class Msg {
    constructor(private _id: string, private cache: AtObjectCache) {
    }

    private get obj(): IMsgAPI {
        return this.cache.getMsg(this._id);
    }

    get id(): string {
        return this._id;
    }

    get receiver(): string | null {
        return this.obj.receiver;
    }

    get text(): string {
        return this.obj.text;
    }

    get mdtext(): string {
        return this.obj.mdtext;
    }

    get date(): Date {
        return new Date(this.obj.date);
    }
}
export class Token {
    constructor(private _id: string, private cache: AtObjectCache) {
    }

    private get obj(): ITokenAPI {
        return this.cache.getToken(this._id);
    }

    get id(): string {
        return this._id;
    }

    get key(): string {
        return this.obj.key;
    }

    get client(): string {
        return this.obj.client;
    }

    get user(): string {
        return this.obj.user;
    }

    get active(): boolean {
        return this.obj.active;
    }

    get date(): Date {
        return new Date(this.obj.date)
    }
}
export class User {
    constructor(private _id: string, private cache: AtObjectCache) {
    }

    private get obj(): IUserAPI {
        return this.cache.getUser(this._id);
    }

    get id(): string {
        return this._id;
    }

    get sn(): string {
        return this.obj.sn;
    }
}