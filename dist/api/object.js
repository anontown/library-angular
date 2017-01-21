var Client = (function () {
    function Client(obj) {
        this.obj = obj;
    }
    Object.defineProperty(Client.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "name", {
        get: function () {
            return this.obj.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "url", {
        get: function () {
            return this.obj.url;
            ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "user", {
        get: function () {
            return this.obj.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "date", {
        get: function () {
            return new Date(this.obj.date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "update", {
        get: function () {
            return new Date(this.obj.update);
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
export { Client };
var History = (function () {
    function History(obj) {
        this.obj = obj;
    }
    Object.defineProperty(History.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(History.prototype, "topic", {
        get: function () {
            return this.obj.topic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(History.prototype, "title", {
        get: function () {
            return this.obj.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(History.prototype, "category", {
        get: function () {
            return this.obj.category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(History.prototype, "text", {
        get: function () {
            return this.obj.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(History.prototype, "mdtext", {
        get: function () {
            return this.obj.mdtext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(History.prototype, "date", {
        get: function () {
            return new Date(this.obj.date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(History.prototype, "hash", {
        get: function () {
            return this.obj.hash;
        },
        enumerable: true,
        configurable: true
    });
    return History;
}());
export { History };
var Res = (function () {
    function Res(obj) {
        this.obj = obj;
    }
    Object.defineProperty(Res.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "topic", {
        get: function () {
            return this.obj.topic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "date", {
        get: function () {
            return new Date(this.obj.date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "user", {
        get: function () {
            return this.obj.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "name", {
        get: function () {
            return this.obj.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "text", {
        get: function () {
            return this.obj.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "mdtext", {
        get: function () {
            return this.obj.mdtext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "reply", {
        get: function () {
            return this.obj.reply;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "isReply", {
        get: function () {
            return this.obj.isReply;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "deleteFlag", {
        get: function () {
            return this.obj.deleteFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "uv", {
        get: function () {
            return this.obj.uv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "dv", {
        get: function () {
            return this.obj.dv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "hash", {
        get: function () {
            return this.obj.hash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "profile", {
        get: function () {
            return this.obj.profile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "replyCount", {
        get: function () {
            return this.obj.replyCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "voteFlag", {
        get: function () {
            return this.obj.voteFlag;
        },
        enumerable: true,
        configurable: true
    });
    return Res;
}());
export { Res };
var Profile = (function () {
    function Profile(obj) {
        this.obj = obj;
    }
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "user", {
        get: function () {
            return this.obj.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "sn", {
        get: function () {
            return this.obj.sn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "name", {
        get: function () {
            return this.obj.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "text", {
        get: function () {
            return this.obj.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "mdtext", {
        get: function () {
            return this.obj.mdtext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "date", {
        get: function () {
            return new Date(this.obj.date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "update", {
        get: function () {
            return new Date(this.obj.update);
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());
export { Profile };
var Topic = (function () {
    function Topic(obj) {
        this.obj = obj;
    }
    Object.defineProperty(Topic.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "title", {
        get: function () {
            return this.obj.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "category", {
        get: function () {
            return this.obj.category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "text", {
        get: function () {
            return this.obj.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "mdtext", {
        get: function () {
            return this.obj.mdtext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "update", {
        get: function () {
            return new Date(this.obj.update);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "date", {
        get: function () {
            return new Date(this.obj.date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "resCount", {
        get: function () {
            return this.obj.resCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "type", {
        get: function () {
            return this.obj.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Topic.prototype, "active", {
        get: function () {
            return this.obj.active;
        },
        enumerable: true,
        configurable: true
    });
    return Topic;
}());
export { Topic };
var Msg = (function () {
    function Msg(obj) {
        this.obj = obj;
    }
    Object.defineProperty(Msg.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Msg.prototype, "receiver", {
        get: function () {
            return this.obj.receiver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Msg.prototype, "text", {
        get: function () {
            return this.obj.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Msg.prototype, "mdtext", {
        get: function () {
            return this.obj.mdtext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Msg.prototype, "date", {
        get: function () {
            return new Date(this.obj.date);
        },
        enumerable: true,
        configurable: true
    });
    return Msg;
}());
export { Msg };
var Token = (function () {
    function Token(obj) {
        this.obj = obj;
    }
    Object.defineProperty(Token.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "key", {
        get: function () {
            return this.obj.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "client", {
        get: function () {
            return this.obj.client;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "user", {
        get: function () {
            return this.obj.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "active", {
        get: function () {
            return this.obj.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "date", {
        get: function () {
            return new Date(this.obj.date);
        },
        enumerable: true,
        configurable: true
    });
    return Token;
}());
export { Token };
var User = (function () {
    function User(obj) {
        this.obj = obj;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this.obj.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "sn", {
        get: function () {
            return this.obj.sn;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
export { User };
