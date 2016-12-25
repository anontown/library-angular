import {
    Client,
    Token,
    Topic,
    Res,
    Msg,
    Profile,
    User
} from './object';


import { ITokenReqAPI } from './api-object';
import { IAuthUser, IAuthToken } from './auth';
import { AtObjectCache } from './at-object-cache';
import { Http, Headers, Response } from '@angular/http';
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
    constructor(public status: number, public message: string) {

    }
}

@Injectable()
export class AtApiService {
    private cache: AtObjectCache = new AtObjectCache();

    constructor(private http: Http) { }

    private async request(name: string, params: any, authToken: IAuthToken | null, authUser: IAuthUser | null): Promise<any> {
        var url = AtConfig.serverURL + name;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let res = await this.http.post(url,
            JSON.stringify({ authUser, authToken, params }), {
                headers
            }).toPromise().catch((r: Response) => {
                throw new AtError(r.status, r.json().message);
            });

        let json = res.json();
        if (res.status === 200) {
            return json;
        }
    }

    //[res]
    async createRes(authToken: IAuthToken,
        params: {
            topic: string,
            name: string,
            text: string,
            reply: string | null,
            profile: string | null
        }): Promise<Res> {
        return this.cache.addRes(await this.request(
            "/res/create",
            params,
            authToken,
            null));
    }
    async findResOne(authToken: IAuthToken | null,
        params: {
            id: string
        }): Promise<Res> {
        return this.cache.addRes(await this.request(
            "/res/find/one",
            params,
            authToken,
            null));
    }
    async findResIn(authToken: IAuthToken | null,
        params: {
            ids: string[]
        }): Promise<Res[]> {
        return this.cache.addResList(await this.request(
            "/res/find/in",
            params,
            authToken,
            null));
    }
    async findRes(authToken: IAuthToken | null,
        params: {
            topic: string,
            type: "before" | "after",
            equal: boolean,
            date: Date,
            limit: number
        }): Promise<Res[]> {
        return this.cache.addResList(await this.request(
            "/res/find",
            params,
            authToken,
            null));
    }
    async findResNew(authToken: IAuthToken | null,
        params: {
            topic: string,
            limit: number
        }): Promise<Res[]> {
        return this.cache.addResList(await this.request(
            "/res/find/new",
            params,
            authToken,
            null));
    }
    async findResHash(authToken: IAuthToken | null,
        params: {
            topic: string,
            hash: string
        }): Promise<Res[]> {
        return this.cache.addResList(await this.request(
            "/res/find/hash",
            params,
            authToken,
            null));
    }
    async findResReply(authToken: IAuthToken | null,
        params: {
            topic: string,
            reply: string
        }): Promise<Res[]> {
        return this.cache.addResList(await this.request(
            "/res/find/reply",
            params,
            authToken,
            null));
    }
    async findResNotice(authToken: IAuthToken,
        params: {
            type: "before" | "after",
            equal: boolean,
            date: Date,
            limit: number
        }): Promise<Res[]> {
        return this.cache.addResList(await this.request(
            "/res/find/notice",
            params,
            authToken,
            null));
    }
    async findResNoticeNew(authToken: IAuthToken,
        params: {
            limit: number
        }): Promise<Res[]> {
        return this.cache.addResList(await this.request(
            "/res/find/notice/new",
            params,
            authToken,
            null));
    }
    async uvRes(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Res> {
        return this.cache.addRes(await this.request(
            "/res/uv",
            params,
            authToken,
            null));
    }
    async dvRes(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Res> {
        return this.cache.addRes(await this.request(
            "/res/dv",
            params,
            authToken,
            null));
    }
    async delRes(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Res> {
        return this.cache.addRes(await this.request(
            "/res/del",
            params,
            authToken,
            null));
    }

    //[topic]
    async createTopic(authToken: IAuthToken,
        params: {
            title: string,
            category: string[],
            text: string
        }): Promise<Topic> {
        return this.cache.addTopic(await this.request(
            "/topic/create",
            params,
            authToken,
            null));
    }
    async findTopicOne(
        params: {
            id: string
        }): Promise<Topic> {
        return this.cache.addTopic(await this.request(
            "/topic/find/one",
            params,
            null,
            null));
    }
    async findTopicIn(
        params: {
            ids: string[]
        }): Promise<Topic[]> {
        return this.cache.addTopicList(await this.request(
            "/topic/find/in",
            params,
            null,
            null));
    }
    async findTopic(
        params: {
            title: string,
            category: string[],
            skip: number,
            limit: number
        }): Promise<Topic[]> {
        return this.cache.addTopicList(await this.request(
            "/topic/find",
            params,
            null,
            null));
    }
    async updateTopic(authToken: IAuthToken,
        params: {
            id: string,
            title: string,
            category: string[],
            text: string
        }): Promise<Topic> {
        return this.cache.addTopic(await this.request(
            "/topic/update",
            params,
            authToken,
            null));
    }
    //[msg]
    async findMsgOne(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Msg> {
        return this.cache.addMsg(await this.request(
            "/msg/find/one",
            params,
            authToken,
            null));
    }
    async findMsgIn(authToken: IAuthToken,
        params: {
            ids: string[]
        }): Promise<Msg[]> {
        return this.cache.addMsgList(await this.request(
            "/msg/find/in",
            params,
            authToken,
            null));
    }
    async findMsg(authToken: IAuthToken,
        params: {
            type: "before" | "after",
            equal: boolean,
            date: Date,
            limit: number
        }): Promise<Msg[]> {
        return this.cache.addMsgList(await this.request(
            "/msg/find",
            params,
            authToken,
            null));
    }
    async findMsgNew(authToken: IAuthToken,
        params: {
            limit: number
        }): Promise<Msg[]> {
        return this.cache.addMsgList(await this.request(
            "/msg/find/new",
            params,
            authToken,
            null));
    }
    //[profile]
    async createProfile(authToken: IAuthToken,
        params: {
            name: string,
            text: string
        }): Promise<Profile> {
        return this.cache.addProfile(await this.request(
            "/profile/create",
            params,
            authToken,
            null));
    }
    async findProfileOne(authToken: IAuthToken | null,
        params: {
            id: string
        }): Promise<Profile> {
        return this.cache.addProfile(await this.request(
            "/profile/find/one",
            params,
            authToken,
            null));
    }
    async findProfileIn(authToken: IAuthToken | null,
        params: {
            ids: string[]
        }): Promise<Profile[]> {
        return this.cache.addProfileList(await this.request(
            "/profile/find/in",
            params,
            authToken,
            null));
    }
    async findProfileAll(authToken: IAuthToken): Promise<Profile[]> {
        return this.cache.addProfileList(await this.request(
            "/profile/find/all",
            null,
            authToken,
            null));
    }
    async updateProfile(authToken: IAuthToken,
        params: {
            id: string,
            name: string,
            text: string
        }): Promise<Profile> {
        return this.cache.addProfile(await this.request(
            "/profile/update",
            params,
            authToken,
            null));
    }
    //[token]
    async findTokenOne(authToken: IAuthToken): Promise<Token> {
        return this.cache.addToken(await this.request(
            "/token/find/one",
            null,
            authToken,
            null));
    }
    async findTokenAll(authUser: IAuthUser): Promise<Token[]> {
        return this.cache.addTokenList(await this.request(
            "/token/find/all",
            null,
            null,
            authUser));
    }
    async enableToken(authUser: IAuthUser,
        params: {
            id: string
        }): Promise<Token> {
        return this.cache.addToken(await this.request(
            "/token/enable",
            params,
            null,
            authUser));
    }
    async disableToken(authUser: IAuthUser,
        params: {
            id: string
        }): Promise<Token> {
        return this.cache.addToken(await this.request(
            "/token/disable",
            params,
            null,
            authUser));
    }
    async updateToken(authUser: IAuthUser,
        params: {
            id: string
        }): Promise<Token> {
        return this.cache.addToken(await this.request(
            "/token/update",
            params,
            null,
            authUser));
    }
    async createToken(authUser: IAuthUser,
        params: {
            client: string
        }): Promise<Token> {
        return this.cache.addToken(await this.request(
            "/token/create",
            params,
            null,
            authUser));
    }
    async setTokenStorage(authToken: IAuthToken,
        params: {
            value: string
        }): Promise<null> {
        return await this.request(
            "/token/storage/set",
            params,
            authToken,
            null);
    }
    async getTokenStorage(authToken: IAuthToken): Promise<string> {
        return await this.request(
            "/token/storage/get",
            null,
            authToken,
            null);
    }
    async createTokenReq(authToken: IAuthToken): Promise<ITokenReqAPI> {
        return await this.request(
            "/token/req/create",
            null,
            authToken,
            null);
    }
    async findTokenReq(
        params: {
            id: string,
            key: string
        }): Promise<Token> {
        return this.cache.addToken(await this.request(
            "/token/find/req",
            params,
            null,
            null));
    }
    //[user]
    async findUserID(
        params: {
            sn: string
        }): Promise<string> {
        return await this.request(
            "/user/find/id",
            params,
            null,
            null);
    }
    async createUser(
        params: {
            sn: string,
            pass: string
        }): Promise<User> {
        return this.cache.addUser(await this.request(
            "/user/create",
            params,
            null,
            null));
    }
    async updateUser(authUser: IAuthUser,
        params: {
            pass: string
        }): Promise<User> {
        return this.cache.addUser(await this.request(
            "/user/update",
            params,
            null,
            authUser));
    }
    //[client]
    async createClient(authUser: IAuthUser,
        params: {
            name: string,
            url: string
        }): Promise<Client> {
        return this.cache.addClient(await this.request(
            "/client/create",
            params,
            null,
            authUser));
    }
    async updateClient(authUser: IAuthUser,
        params: {
            id: string,
            name: string,
            url: string
        }): Promise<Client> {
        return this.cache.addClient(await this.request(
            "/client/update",
            params,
            null,
            authUser));
    }
    async findClientOne(authUser: IAuthUser | null,
        params: {
            id: string
        }): Promise<Client> {
        return this.cache.addClient(await this.request(
            "/client/find/one",
            params,
            null,
            authUser));
    }
    async findClientIn(authUser: IAuthUser | null,
        params: {
            ids: string[]
        }): Promise<Client[]> {
        return this.cache.addClientList(await this.request(
            "/client/find/in",
            params,
            null,
            authUser));
    }
    async findClientAll(authUser: IAuthUser): Promise<Client[]> {
        return this.cache.addClientList(await this.request(
            "/client/find/all",
            null,
            null,
            authUser));
    }
}