import {
    Client,
    Token,
    Topic,
    Res,
    Msg,
    Profile,
    User,
    History
} from './object';

import {
    ITokenReqAPI,
    IResAPI,
    ITopicAPI,
    ITokenAPI,
    IMsgAPI,
    IUserAPI,
    IClientAPI,
    IHistoryAPI,
    IProfileAPI,
    TopicType
} from './api-object';
import { IAuthUser, IAuthToken } from './auth';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


export class AtError {
    constructor(public status: number, public message: string) {

    }
}

@Injectable()
export class AtApiService {
    static serverURL = "https://api.anontown.com";
    constructor(private http: Http) { }

    private async request<T>(name: string, params: any, authToken: IAuthToken | null, authUser: IAuthUser | null): Promise<T> {
        var url = AtApiService.serverURL + name;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let res = await this.http.post(url,
            JSON.stringify({ authUser, authToken, params }), {
                headers
            }).toPromise().catch((r: Response) => {
                throw new AtError(r.status, r.json().message);
            });

        return res.json();
    }

    //[res]
    async createRes(authToken: IAuthToken,
        params: {
            topic: string,
            name: string,
            text: string,
            reply: string | null,
            profile: string | null,
            age: boolean
        }): Promise<Res> {
        return new Res(await this.request<IResAPI>(
            "/res/create",
            params,
            authToken,
            null));
    }
    async findResOne(authToken: IAuthToken | null,
        params: {
            id: string
        }): Promise<Res> {
        return new Res(await this.request<IResAPI>(
            "/res/find/one",
            params,
            authToken,
            null));
    }
    async findResIn(authToken: IAuthToken | null,
        params: {
            ids: string[]
        }): Promise<Res[]> {
        return (await this.request<IResAPI[]>(
            "/res/find/in",
            params,
            authToken,
            null)).map(r => new Res(r));
    }
    async findRes(authToken: IAuthToken | null,
        params: {
            topic: string,
            type: "before" | "after",
            equal: boolean,
            date: Date,
            limit: number
        }): Promise<Res[]> {
        return (await this.request<IResAPI[]>(
            "/res/find",
            params,
            authToken,
            null)).map(r => new Res(r));
    }
    async findResNew(authToken: IAuthToken | null,
        params: {
            topic: string,
            limit: number
        }): Promise<Res[]> {
        return (await this.request<IResAPI[]>(
            "/res/find/new",
            params,
            authToken,
            null)).map(r => new Res(r));
    }
    async findResHash(authToken: IAuthToken | null,
        params: {
            topic: string,
            hash: string
        }): Promise<Res[]> {
        return (await this.request<IResAPI[]>(
            "/res/find/hash",
            params,
            authToken,
            null)).map(r => new Res(r));
    }
    async findResReply(authToken: IAuthToken | null,
        params: {
            topic: string,
            reply: string
        }): Promise<Res[]> {
        return (await this.request<IResAPI[]>(
            "/res/find/reply",
            params,
            authToken,
            null)).map(r => new Res(r));
    }
    async findResNotice(authToken: IAuthToken,
        params: {
            type: "before" | "after",
            equal: boolean,
            date: Date,
            limit: number
        }): Promise<Res[]> {
        return (await this.request<IResAPI[]>(
            "/res/find/notice",
            params,
            authToken,
            null)).map(r => new Res(r));
    }
    async findResNoticeNew(authToken: IAuthToken,
        params: {
            limit: number
        }): Promise<Res[]> {
        return (await this.request<IResAPI[]>(
            "/res/find/notice/new",
            params,
            authToken,
            null)).map(r => new Res(r));
    }
    async uvRes(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Res> {
        return new Res(await this.request<IResAPI>(
            "/res/uv",
            params,
            authToken,
            null));
    }
    async dvRes(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Res> {
        return new Res(await this.request<IResAPI>(
            "/res/dv",
            params,
            authToken,
            null));
    }
    async delRes(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Res> {
        return new Res(await this.request<IResAPI>(
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
            text: string,
            type: TopicType
        }): Promise<Topic> {
        return new Topic(await this.request<ITopicAPI>(
            "/topic/create",
            params,
            authToken,
            null));
    }
    async findTopicOne(
        params: {
            id: string
        }): Promise<Topic> {
        return new Topic(await this.request<ITopicAPI>(
            "/topic/find/one",
            params,
            null,
            null));
    }
    async findTopicIn(
        params: {
            ids: string[]
        }): Promise<Topic[]> {
        return (await this.request<ITopicAPI[]>(
            "/topic/find/in",
            params,
            null,
            null)).map(t => new Topic(t));
    }
    async findTopicBoard(): Promise<Topic[]> {
        return (await this.request<ITopicAPI[]>(
            "/topic/find/board",
            null,
            null,
            null)).map(t => new Topic(t));
    }
    async findTopic(
        params: {
            title: string,
            category: string[],
            skip: number,
            limit: number
        }): Promise<Topic[]> {
        return (await this.request<ITopicAPI[]>(
            "/topic/find",
            params,
            null,
            null)).map(t => new Topic(t));
    }
    async updateTopic(authToken: IAuthToken,
        params: {
            id: string,
            title: string,
            category: string[],
            text: string
        }): Promise<Topic> {
        return new Topic(await this.request<ITopicAPI>(
            "/topic/update",
            params,
            authToken,
            null));
    }

    //[history]
    async findHistoryOne(params: {
        id: string
    }): Promise<History> {
        return new History(await this.request<IHistoryAPI>(
            "/history/find/one",
            params,
            null,
            null));
    }

    async findHistoryIn(params: {
        ids: string[]
    }): Promise<History[]> {
        return (await this.request<IHistoryAPI[]>(
            "/history/find/in",
            params,
            null,
            null)).map(h => new History(h));
    }

    async findHistoryAll(params: {
        topic: string
    }): Promise<History[]> {
        return (await this.request<IHistoryAPI[]>(
            "/history/find/all",
            params,
            null,
            null)).map(h => new History(h));
    }
    //[msg]
    async findMsgOne(authToken: IAuthToken,
        params: {
            id: string
        }): Promise<Msg> {
        return new Msg(await this.request<IMsgAPI>(
            "/msg/find/one",
            params,
            authToken,
            null));
    }
    async findMsgIn(authToken: IAuthToken,
        params: {
            ids: string[]
        }): Promise<Msg[]> {
        return (await this.request<IMsgAPI[]>(
            "/msg/find/in",
            params,
            authToken,
            null)).map(m => new Msg(m));
    }
    async findMsg(authToken: IAuthToken,
        params: {
            type: "before" | "after",
            equal: boolean,
            date: Date,
            limit: number
        }): Promise<Msg[]> {
        return (await this.request<IMsgAPI[]>(
            "/msg/find",
            params,
            authToken,
            null)).map(m => new Msg(m));
    }
    async findMsgNew(authToken: IAuthToken,
        params: {
            limit: number
        }): Promise<Msg[]> {
        return (await this.request<IMsgAPI[]>(
            "/msg/find/new",
            params,
            authToken,
            null)).map(m => new Msg(m));
    }
    //[profile]
    async createProfile(authToken: IAuthToken,
        params: {
            name: string,
            text: string,
            sn: string
        }): Promise<Profile> {
        return new Profile(await this.request<IProfileAPI>(
            "/profile/create",
            params,
            authToken,
            null));
    }
    async findProfileOne(authToken: IAuthToken | null,
        params: {
            id: string
        }): Promise<Profile> {
        return new Profile(await this.request<IProfileAPI>(
            "/profile/find/one",
            params,
            authToken,
            null));
    }
    async findProfileIn(authToken: IAuthToken | null,
        params: {
            ids: string[]
        }): Promise<Profile[]> {
        return (await this.request<IProfileAPI[]>(
            "/profile/find/in",
            params,
            authToken,
            null)).map(p => new Profile(p));
    }
    async findProfileAll(authToken: IAuthToken): Promise<Profile[]> {
        return (await this.request<IProfileAPI[]>(
            "/profile/find/all",
            null,
            authToken,
            null)).map(p => new Profile(p));
    }
    async updateProfile(authToken: IAuthToken,
        params: {
            id: string,
            name: string,
            text: string,
            sn: string
        }): Promise<Profile> {
        return new Profile(await this.request<IProfileAPI>(
            "/profile/update",
            params,
            authToken,
            null));
    }
    //[token]
    async findTokenOne(authToken: IAuthToken): Promise<Token> {
        return new Token(await this.request<ITokenAPI>(
            "/token/find/one",
            null,
            authToken,
            null));
    }
    async findTokenAll(authUser: IAuthUser): Promise<Token[]> {
        return (await this.request<ITokenAPI[]>(
            "/token/find/all",
            null,
            null,
            authUser)).map(t => new Token(t));
    }
    async enableToken(authUser: IAuthUser,
        params: {
            id: string
        }): Promise<Token> {
        return new Token(await this.request<ITokenAPI>(
            "/token/enable",
            params,
            null,
            authUser));
    }
    async disableToken(authUser: IAuthUser,
        params: {
            id: string
        }): Promise<Token> {
        return new Token(await this.request<ITokenAPI>(
            "/token/disable",
            params,
            null,
            authUser));
    }
    async updateToken(authUser: IAuthUser,
        params: {
            id: string
        }): Promise<Token> {
        return new Token(await this.request<ITokenAPI>(
            "/token/update",
            params,
            null,
            authUser));
    }
    async createToken(authUser: IAuthUser,
        params: {
            client: string
        }): Promise<Token> {
        return new Token(await this.request<ITokenAPI>(
            "/token/create",
            params,
            null,
            authUser));
    }
    async setTokenStorage(authToken: IAuthToken,
        params: {
            value: string
        }): Promise<void> {
        return await this.request<void>(
            "/token/storage/set",
            params,
            authToken,
            null);
    }
    async getTokenStorage(authToken: IAuthToken): Promise<string> {
        return await this.request<string>(
            "/token/storage/get",
            null,
            authToken,
            null);
    }
    async createTokenReq(authToken: IAuthToken): Promise<ITokenReqAPI> {
        return await this.request<ITokenReqAPI>(
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
        return new Token(await this.request<ITokenAPI>(
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
        return await this.request<string>(
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
        return new User(await this.request<IUserAPI>(
            "/user/create",
            params,
            null,
            null));
    }
    async updateUser(authUser: IAuthUser,
        params: {
            pass: string,
            sn: string
        }): Promise<User> {
        return new User(await this.request<IUserAPI>(
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
        return new Client(await this.request<IClientAPI>(
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
        return new Client(await this.request<IClientAPI>(
            "/client/update",
            params,
            null,
            authUser));
    }
    async findClientOne(authUser: IAuthUser | null,
        params: {
            id: string
        }): Promise<Client> {
        return new Client(await this.request<IClientAPI>(
            "/client/find/one",
            params,
            null,
            authUser));
    }
    async findClientIn(authUser: IAuthUser | null,
        params: {
            ids: string[]
        }): Promise<Client[]> {
        return (await this.request<IClientAPI[]>(
            "/client/find/in",
            params,
            null,
            authUser)).map(c => new Client(c));
    }
    async findClientAll(authUser: IAuthUser): Promise<Client[]> {
        return (await this.request<IClientAPI[]>(
            "/client/find/all",
            null,
            null,
            authUser)).map(c => new Client(c));
    }

    async authUser(authUser: IAuthUser): Promise<void> {
        return await this.request<void>(
            "/user/auth",
            null,
            null,
            authUser);
    }
}