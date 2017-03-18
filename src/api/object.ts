import {
    IProfileAPI,
    IResAPI,
    ITokenAPI,
    ITopicAPI,
    IUserAPI,
    IMsgAPI,
    IHistoryAPI,
    IClientAPI,
    ResDeleteFlag,
    ResVoteFlag,
    ITopicForkAPI,
    ITopicOneAPI,
    ITopicNormalAPI
} from './api-object';

export class Client {
    constructor(private obj: IClientAPI) {
    }

    get id(): string {
        return this.obj.id;
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

    get tags(): string[] {
        return this.obj.tags;
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
    constructor(private obj: IResAPI) {
    }

    get id(): string {
        return this.obj.id;
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

    get isReply(): boolean | null {
        return this.obj.isReply;
    }

    get deleteFlag(): ResDeleteFlag {
        return this.obj.deleteFlag;
    }

    get uv(): number {
        return this.obj.uv;
    }

    get dv(): number {
        return this.obj.dv;
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

    get voteFlag(): ResVoteFlag | null {
        return this.obj.voteFlag;
    }
}
export class Profile {
    constructor(private obj: IProfileAPI) {
    }

    get id(): string {
        return this.obj.id;
    }

    get user(): string | null {
        return this.obj.user;
    }

    get sn(): string {
        return this.obj.sn;
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

export class TopicNormal {
    constructor(private obj: ITopicNormalAPI) {
    }

    get id() {
        return this.obj.id;
    }

    get title() {
        return this.obj.title;
    }

    get tags() {
        return this.obj.tags;
    }

    get text() {
        return this.obj.text;
    }

    get mdtext() {
        return this.obj.mdtext;
    }

    get update() {
        return new Date(this.obj.update);
    }

    get date() {
        return new Date(this.obj.date);
    }

    get resCount() {
        return this.obj.resCount;
    }

    get type() {
        return this.obj.type;
    }

    get active() {
        return this.obj.active;
    }
}

export class TopicOne {
    constructor(private obj: ITopicOneAPI) {
    }

    get id() {
        return this.obj.id;
    }

    get title() {
        return this.obj.title;
    }

    get tags() {
        return this.obj.tags;
    }

    get text() {
        return this.obj.text;
    }

    get mdtext() {
        return this.obj.mdtext;
    }

    get update() {
        return new Date(this.obj.update);
    }

    get date() {
        return new Date(this.obj.date);
    }

    get resCount() {
        return this.obj.resCount;
    }

    get type() {
        return this.obj.type;
    }

    get active() {
        return this.obj.active;
    }
}

export class TopicFork {
    constructor(private obj: ITopicForkAPI) {
    }

    get id() {
        return this.obj.id;
    }

    get title() {
        return this.obj.title;
    }

    get parent() {
        return this.obj.parent;
    }

    get update() {
        return new Date(this.obj.update);
    }

    get date() {
        return new Date(this.obj.date);
    }

    get resCount() {
        return this.obj.resCount;
    }

    get type() {
        return this.obj.type;
    }

    get active() {
        return this.obj.active;
    }
}

export type Topic = TopicOne | TopicNormal | TopicFork;
export function newTopic(t: ITopicAPI): Topic {
    switch (t.type) {
        case 'normal':
            return new TopicNormal(t);
        case 'one':
            return new TopicOne(t);
        case 'fork':
            return new TopicFork(t);
    }
}

export class Msg {
    constructor(private obj: IMsgAPI) {
    }

    get id(): string {
        return this.obj.id;
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
    constructor(private obj: ITokenAPI) {
    }

    get id(): string {
        return this.obj.id;
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
    constructor(private obj: IUserAPI) {
    }

    get id(): string {
        return this.obj.id;
    }

    get sn(): string {
        return this.obj.sn;
    }
}

