var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { AtObjectCache } from './at-object-cache';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AtConfig } from '../config';
/*export class AtError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = "AtError";
    }
}*/
export class AtError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}
let AtApiService = class AtApiService {
    constructor(http) {
        this.http = http;
        this.cache = new AtObjectCache();
    }
    request(name, params, authToken, authUser) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = AtConfig.serverURL + name;
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            let res = yield this.http.post(url, JSON.stringify({ authUser, authToken, params }), {
                headers
            }).toPromise().catch((r) => {
                throw new AtError(r.status, r.json().message);
            });
            let json = res.json();
            if (res.status === 200) {
                return json;
            }
        });
    }
    //[res]
    createRes(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addRes(yield this.request("/res/create", params, authToken, null));
        });
    }
    findResOne(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addRes(yield this.request("/res/find/one", params, authToken, null));
        });
    }
    findResIn(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addResList(yield this.request("/res/find/in", params, authToken, null));
        });
    }
    findRes(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addResList(yield this.request("/res/find", params, authToken, null));
        });
    }
    findResNew(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addResList(yield this.request("/res/find/new", params, authToken, null));
        });
    }
    findResHash(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addResList(yield this.request("/res/find/hash", params, authToken, null));
        });
    }
    findResReply(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addResList(yield this.request("/res/find/reply", params, authToken, null));
        });
    }
    findResNotice(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addResList(yield this.request("/res/find/notice", params, authToken, null));
        });
    }
    findResNoticeNew(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addResList(yield this.request("/res/find/notice/new", params, authToken, null));
        });
    }
    uvRes(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addRes(yield this.request("/res/uv", params, authToken, null));
        });
    }
    dvRes(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addRes(yield this.request("/res/dv", params, authToken, null));
        });
    }
    delRes(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addRes(yield this.request("/res/del", params, authToken, null));
        });
    }
    //[topic]
    createTopic(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addTopic(yield this.request("/topic/create", params, authToken, null));
        });
    }
    findTopicOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addTopic(yield this.request("/topic/find/one", params, null, null));
        });
    }
    findTopicIn(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addTopicList(yield this.request("/topic/find/in", params, null, null));
        });
    }
    findTopic(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addTopicList(yield this.request("/topic/find", params, null, null));
        });
    }
    updateTopic(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addTopic(yield this.request("/topic/update", params, authToken, null));
        });
    }
    //[msg]
    findMsgOne(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addMsg(yield this.request("/msg/find/one", params, authToken, null));
        });
    }
    findMsgIn(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addMsgList(yield this.request("/msg/find/in", params, authToken, null));
        });
    }
    findMsg(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addMsgList(yield this.request("/msg/find", params, authToken, null));
        });
    }
    findMsgNew(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addMsgList(yield this.request("/msg/find/new", params, authToken, null));
        });
    }
    //[profile]
    createProfile(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addProfile(yield this.request("/profile/create", params, authToken, null));
        });
    }
    findProfileOne(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addProfile(yield this.request("/profile/find/one", params, authToken, null));
        });
    }
    findProfileIn(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addProfileList(yield this.request("/profile/find/in", params, authToken, null));
        });
    }
    findProfileAll(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addProfileList(yield this.request("/profile/find/all", null, authToken, null));
        });
    }
    updateProfile(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addProfile(yield this.request("/profile/update", params, authToken, null));
        });
    }
    //[token]
    findTokenOne(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addToken(yield this.request("/token/find/one", null, authToken, null));
        });
    }
    findTokenAll(authUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addTokenList(yield this.request("/token/find/all", null, null, authUser));
        });
    }
    enableToken(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addToken(yield this.request("/token/enable", params, null, authUser));
        });
    }
    disableToken(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addToken(yield this.request("/token/disable", params, null, authUser));
        });
    }
    updateToken(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addToken(yield this.request("/token/update", params, null, authUser));
        });
    }
    createToken(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addToken(yield this.request("/token/create", params, null, authUser));
        });
    }
    setTokenStorage(authToken, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request("/token/storage/set", params, authToken, null);
        });
    }
    getTokenStorage(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request("/token/storage/get", null, authToken, null);
        });
    }
    createTokenReq(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request("/token/req/create", null, authToken, null);
        });
    }
    findTokenReq(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addToken(yield this.request("/token/find/req", params, null, null));
        });
    }
    //[user]
    findUserID(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request("/user/find/id", params, null, null);
        });
    }
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addUser(yield this.request("/user/create", params, null, null));
        });
    }
    updateUser(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addUser(yield this.request("/user/update", params, null, authUser));
        });
    }
    //[client]
    createClient(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addClient(yield this.request("/client/create", params, null, authUser));
        });
    }
    updateClient(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addClient(yield this.request("/client/update", params, null, authUser));
        });
    }
    findClientOne(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addClient(yield this.request("/client/find/one", params, null, authUser));
        });
    }
    findClientIn(authUser, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addClientList(yield this.request("/client/find/in", params, null, authUser));
        });
    }
    findClientAll(authUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cache.addClientList(yield this.request("/client/find/all", null, null, authUser));
        });
    }
};
AtApiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AtApiService);
export { AtApiService };
