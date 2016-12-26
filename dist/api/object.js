export class Client {
    constructor(_id, cache) {
        this._id = _id;
        this.cache = cache;
    }
    get obj() {
        return this.cache.getClient(this._id);
    }
    get id() {
        return this._id;
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
    constructor(_id, cache) {
        this._id = _id;
        this.cache = cache;
    }
    get obj() {
        return this.cache.getRes(this._id);
    }
    get id() {
        return this._id;
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
    constructor(_id, cache) {
        this._id = _id;
        this.cache = cache;
    }
    get obj() {
        return this.cache.getProfile(this._id);
    }
    get id() {
        return this._id;
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
    constructor(_id, cache) {
        this._id = _id;
        this.cache = cache;
        this._histories = this.obj.histories.map(h => new History(h));
    }
    get obj() {
        return this.cache.getTopic(this._id);
    }
    get id() {
        return this._id;
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
    constructor(_id, cache) {
        this._id = _id;
        this.cache = cache;
    }
    get obj() {
        return this.cache.getMsg(this._id);
    }
    get id() {
        return this._id;
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
    constructor(_id, cache) {
        this._id = _id;
        this.cache = cache;
    }
    get obj() {
        return this.cache.getToken(this._id);
    }
    get id() {
        return this._id;
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
    constructor(_id, cache) {
        this._id = _id;
        this.cache = cache;
    }
    get obj() {
        return this.cache.getUser(this._id);
    }
    get id() {
        return this._id;
    }
    get sn() {
        return this.obj.sn;
    }
}
