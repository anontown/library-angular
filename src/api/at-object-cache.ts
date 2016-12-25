import {
    IClientAPI,
    ITokenAPI,
    ITopicAPI,
    IResAPI,
    IMsgAPI,
    IProfileAPI,
    IUserAPI
} from './api-object';

import {
    Client,
    Token,
    Topic,
    Res,
    Msg,
    Profile,
    User
} from './object';

export class AtObjectCache {
    private token = new Map<string, ITokenAPI>();
    private client = new Map<string, IClientAPI>();
    private topic = new Map<string, ITopicAPI>();
    private res = new Map<string, IResAPI>();
    private msg = new Map<string, IMsgAPI>();
    private profile = new Map<string, IProfileAPI>();
    private user = new Map<string, IUserAPI>();

    getToken(id: string): ITokenAPI {
        let val = this.token.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }

    getClient(id: string): IClientAPI {
        let val = this.client.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }

    getTopic(id: string): ITopicAPI {
        let val = this.topic.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }

    getRes(id: string): IResAPI {
        let val = this.res.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }

    getMsg(id: string): IMsgAPI {
        let val = this.msg.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }

    getProfile(id: string): IProfileAPI {
        let val = this.profile.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }

    getUser(id: string): IUserAPI {
        let val = this.user.get(id);
        if (val === undefined) {
            throw Error();
        }
        return val;
    }

    addTopic = (val: ITopicAPI) => {
        this.topic.set(val.id, val);
        return new Topic(val.id, this);
    };

    addTopicList = (val: ITopicAPI[]) => {
        return val.map(x => this.addTopic(x));
    };

    addRes = (val: IResAPI) => {
        this.res.set(val.id, val);
        return new Res(val.id, this);
    };

    addResList = (val: IResAPI[]) => {
        return val.map(x => this.addRes(x));
    };

    addMsg = (val: IMsgAPI) => {
        this.msg.set(val.id, val);
        return new Msg(val.id, this);
    };

    addMsgList = (val: IMsgAPI[]) => {
        return val.map(x => this.addMsg(x));
    };

    addProfile = (val: IProfileAPI) => {
        this.profile.set(val.id, val);
        return new Profile(val.id, this);
    };

    addProfileList = (val: IProfileAPI[]) => {
        return val.map(x => this.addProfile(x));
    };

    addToken = (val: ITokenAPI) => {
        this.token.set(val.id, val);
        return new Token(val.id, this);
    };

    addTokenList = (val: ITokenAPI[]) => {
        return val.map(x => this.addToken(x));
    };

    addClient = (val: IClientAPI) => {
        this.client.set(val.id, val);
        return new Client(val.id, this);
    };

    addClientList = (val: IClientAPI[]) => {
        return val.map(x => this.addClient(x));
    };

    addUser = (val: IUserAPI) => {
        this.user.set(val.id, val);
        return new User(val.id, this);
    };

    addUserList = (val: IUserAPI[]) => {
        return val.map(x => this.addUser(x));
    };
}