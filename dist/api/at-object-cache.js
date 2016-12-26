import { Client, Token, Topic, Res, Msg, Profile, User } from './object';
export class AtObjectCache {
    constructor() {
        this.token = new Map();
        this.client = new Map();
        this.topic = new Map();
        this.res = new Map();
        this.msg = new Map();
        this.profile = new Map();
        this.user = new Map();
        this.addTopic = (val) => {
            this.topic.set(val.id, val);
            return new Topic(val);
        };
        this.addTopicList = (val) => {
            return val.map(x => this.addTopic(x));
        };
        this.addRes = (val) => {
            this.res.set(val.id, val);
            return new Res(val);
        };
        this.addResList = (val) => {
            return val.map(x => this.addRes(x));
        };
        this.addMsg = (val) => {
            this.msg.set(val.id, val);
            return new Msg(val);
        };
        this.addMsgList = (val) => {
            return val.map(x => this.addMsg(x));
        };
        this.addProfile = (val) => {
            this.profile.set(val.id, val);
            return new Profile(val);
        };
        this.addProfileList = (val) => {
            return val.map(x => this.addProfile(x));
        };
        this.addToken = (val) => {
            this.token.set(val.id, val);
            return new Token(val);
        };
        this.addTokenList = (val) => {
            return val.map(x => this.addToken(x));
        };
        this.addClient = (val) => {
            this.client.set(val.id, val);
            return new Client(val);
        };
        this.addClientList = (val) => {
            return val.map(x => this.addClient(x));
        };
        this.addUser = (val) => {
            this.user.set(val.id, val);
            return new User(val);
        };
        this.addUserList = (val) => {
            return val.map(x => this.addUser(x));
        };
    }
    getToken(id) {
        let val = this.token.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }
    getClient(id) {
        let val = this.client.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }
    getTopic(id) {
        let val = this.topic.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }
    getRes(id) {
        let val = this.res.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }
    getMsg(id) {
        let val = this.msg.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }
    getProfile(id) {
        let val = this.profile.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }
    getUser(id) {
        let val = this.user.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }
}
