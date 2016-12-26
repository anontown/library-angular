export class Client {
    constructor(obj) {
        this.obj = obj;
    }
    get id() {
        return this.obj.id;
    }
    get name() {
        return this.obj.name;
    }
    get url() {
        return this.obj.url;
        ;
    }
    get user() {
        return this.obj.user;
    }
    get date() {
        return new Date(this.obj.date);
    }
    get update() {
        return new Date(this.obj.update);
    }
}
export class History {
    constructor(obj) {
        this.obj = obj;
    }
    get id() {
        return this.obj.id;
    }
    get topic() {
        return this.obj.topic;
    }
    get title() {
        return this.obj.title;
    }
    get category() {
        return this.obj.category;
    }
    get text() {
        return this.obj.text;
    }
    get mdtext() {
        return this.obj.mdtext;
    }
    get date() {
        return new Date(this.obj.date);
    }
    get hash() {
        return this.obj.hash;
    }
}
export class Res {
    constructor(obj) {
        this.obj = obj;
    }
    get id() {
        return this.obj.id;
    }
    get topic() {
        return this.obj.topic;
    }
    get date() {
        return new Date(this.obj.date);
    }
    get user() {
        return this.obj.user;
    }
    get name() {
        return this.obj.name;
    }
    get text() {
        return this.obj.text;
    }
    get mdtext() {
        return this.obj.mdtext;
    }
    get reply() {
        return this.obj.reply;
    }
    get deleteFlag() {
        return this.obj.deleteFlag;
    }
    get vote() {
        return this.obj.vote;
    }
    get hash() {
        return this.obj.hash;
    }
    get profile() {
        return this.obj.profile;
    }
    get replyCount() {
        return this.obj.replyCount;
    }
    get isVote() {
        return this.obj.isVote;
    }
}
export class Profile {
    constructor(obj) {
        this.obj = obj;
    }
    get id() {
        return this.obj.id;
    }
    get user() {
        return this.obj.user;
    }
    get name() {
        return this.obj.name;
    }
    get text() {
        return this.obj.text;
    }
    get mdtext() {
        return this.obj.mdtext;
    }
    get date() {
        return new Date(this.obj.date);
    }
    get update() {
        return new Date(this.obj.update);
    }
}
export class Topic {
    constructor(obj) {
        this.obj = obj;
        this._histories = this.obj.histories.map(h => new History(h));
    }
    get id() {
        return this.obj.id;
    }
    get title() {
        return this.obj.title;
    }
    get category() {
        return this.obj.category;
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
    get histories() {
        return this._histories;
    }
}
export class Msg {
    constructor(obj) {
        this.obj = obj;
    }
    get id() {
        return this.obj.id;
    }
    get receiver() {
        return this.obj.receiver;
    }
    get text() {
        return this.obj.text;
    }
    get mdtext() {
        return this.obj.mdtext;
    }
    get date() {
        return new Date(this.obj.date);
    }
}
export class Token {
    constructor(obj) {
        this.obj = obj;
    }
    get id() {
        return this.obj.id;
    }
    get key() {
        return this.obj.key;
    }
    get client() {
        return this.obj.client;
    }
    get user() {
        return this.obj.user;
    }
    get active() {
        return this.obj.active;
    }
    get date() {
        return new Date(this.obj.date);
    }
}
export class User {
    constructor(obj) {
        this.obj = obj;
    }
    get id() {
        return this.obj.id;
    }
    get sn() {
        return this.obj.sn;
    }
}
