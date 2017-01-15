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
    TopicType
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

    get isVote(): boolean | null {
        return this.obj.isVote;
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
    constructor(private obj: ITopicAPI) {
    }

    get id(): string {
        return this.obj.id;
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

    get type(): TopicType {
        return this.obj.type;
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

