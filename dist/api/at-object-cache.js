import { Client, Token, Topic, Res, Msg, Profile, User } from './object';
var AtObjectCache = (function () {
    function AtObjectCache() {
        var _this = this;
        this.token = new Map();
        this.client = new Map();
        this.topic = new Map();
        this.res = new Map();
        this.msg = new Map();
        this.profile = new Map();
        this.user = new Map();
        this.addTopic = function (val) {
            _this.topic.set(val.id, val);
            return new Topic(val);
        };
        this.addTopicList = function (val) {
            return val.map(function (x) { return _this.addTopic(x); });
        };
        this.addRes = function (val) {
            _this.res.set(val.id, val);
            return new Res(val);
        };
        this.addResList = function (val) {
            return val.map(function (x) { return _this.addRes(x); });
        };
        this.addMsg = function (val) {
            _this.msg.set(val.id, val);
            return new Msg(val);
        };
        this.addMsgList = function (val) {
            return val.map(function (x) { return _this.addMsg(x); });
        };
        this.addProfile = function (val) {
            _this.profile.set(val.id, val);
            return new Profile(val);
        };
        this.addProfileList = function (val) {
            return val.map(function (x) { return _this.addProfile(x); });
        };
        this.addToken = function (val) {
            _this.token.set(val.id, val);
            return new Token(val);
        };
        this.addTokenList = function (val) {
            return val.map(function (x) { return _this.addToken(x); });
        };
        this.addClient = function (val) {
            _this.client.set(val.id, val);
            return new Client(val);
        };
        this.addClientList = function (val) {
            return val.map(function (x) { return _this.addClient(x); });
        };
        this.addUser = function (val) {
            _this.user.set(val.id, val);
            return new User(val);
        };
        this.addUserList = function (val) {
            return val.map(function (x) { return _this.addUser(x); });
        };
    }
    AtObjectCache.prototype.getToken = function (id) {
        var val = this.token.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    };
    AtObjectCache.prototype.getClient = function (id) {
        var val = this.client.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    };
    AtObjectCache.prototype.getTopic = function (id) {
        var val = this.topic.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    };
    AtObjectCache.prototype.getRes = function (id) {
        var val = this.res.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    };
    AtObjectCache.prototype.getMsg = function (id) {
        var val = this.msg.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    };
    AtObjectCache.prototype.getProfile = function (id) {
        var val = this.profile.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    };
    AtObjectCache.prototype.getUser = function (id) {
        var val = this.user.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    };
    return AtObjectCache;
}());
export { AtObjectCache };
