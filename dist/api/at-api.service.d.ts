import { Client, Token, Topic, Res, Msg, Profile, User, History } from './object';
import { ITokenReqAPI, TopicType } from './api-object';
import { IAuthUser, IAuthToken } from './auth';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export declare class AtError {
    status: number;
    message: string;
    constructor(status: number, message: string);
}
export declare class AtApiService {
    private http;
    static serverURL: string;
    constructor(http: Http);
    private request<T>(name, params, authToken, authUser);
    createRes(authToken: IAuthToken, params: {
        topic: string;
        name: string;
        text: string;
        reply: string | null;
        profile: string | null;
        age: boolean;
    }): Promise<Res>;
    findResOne(authToken: IAuthToken | null, params: {
        id: string;
    }): Promise<Res>;
    findResIn(authToken: IAuthToken | null, params: {
        ids: string[];
    }): Promise<Res[]>;
    findRes(authToken: IAuthToken | null, params: {
        topic: string;
        type: "before" | "after";
        equal: boolean;
        date: Date;
        limit: number;
    }): Promise<Res[]>;
    findResNew(authToken: IAuthToken | null, params: {
        topic: string;
        limit: number;
    }): Promise<Res[]>;
    findResHash(authToken: IAuthToken | null, params: {
        topic: string;
        hash: string;
    }): Promise<Res[]>;
    findResReply(authToken: IAuthToken | null, params: {
        topic: string;
        reply: string;
    }): Promise<Res[]>;
    findResNotice(authToken: IAuthToken, params: {
        type: "before" | "after";
        equal: boolean;
        date: Date;
        limit: number;
    }): Promise<Res[]>;
    findResNoticeNew(authToken: IAuthToken, params: {
        limit: number;
    }): Promise<Res[]>;
    uvRes(authToken: IAuthToken, params: {
        id: string;
    }): Promise<Res>;
    dvRes(authToken: IAuthToken, params: {
        id: string;
    }): Promise<Res>;
    cvRes(authToken: IAuthToken, params: {
        id: string;
    }): Promise<Res>;
    delRes(authToken: IAuthToken, params: {
        id: string;
    }): Promise<Res>;
    createTopic(authToken: IAuthToken, params: {
        title: string;
        tags: string[];
        text: string;
        type: TopicType;
    }): Promise<Topic>;
    findTopicOne(params: {
        id: string;
    }): Promise<Topic>;
    findTopicIn(params: {
        ids: string[];
    }): Promise<Topic[]>;
    findTopicTags(): Promise<{
        name: string;
        count: number;
    }[]>;
    findTopic(params: {
        title: string;
        tags: string[];
        skip: number;
        limit: number;
        activeOnly: boolean;
    }): Promise<Topic[]>;
    updateTopic(authToken: IAuthToken, params: {
        id: string;
        title: string;
        tags: string[];
        text: string;
    }): Promise<Topic>;
    findHistoryOne(params: {
        id: string;
    }): Promise<History>;
    findHistoryIn(params: {
        ids: string[];
    }): Promise<History[]>;
    findHistoryAll(params: {
        topic: string;
    }): Promise<History[]>;
    findMsgOne(authToken: IAuthToken, params: {
        id: string;
    }): Promise<Msg>;
    findMsgIn(authToken: IAuthToken, params: {
        ids: string[];
    }): Promise<Msg[]>;
    findMsg(authToken: IAuthToken, params: {
        type: "before" | "after";
        equal: boolean;
        date: Date;
        limit: number;
    }): Promise<Msg[]>;
    findMsgNew(authToken: IAuthToken, params: {
        limit: number;
    }): Promise<Msg[]>;
    createProfile(authToken: IAuthToken, params: {
        name: string;
        text: string;
        sn: string;
    }): Promise<Profile>;
    findProfileOne(authToken: IAuthToken | null, params: {
        id: string;
    }): Promise<Profile>;
    findProfileIn(authToken: IAuthToken | null, params: {
        ids: string[];
    }): Promise<Profile[]>;
    findProfileAll(authToken: IAuthToken): Promise<Profile[]>;
    updateProfile(authToken: IAuthToken, params: {
        id: string;
        name: string;
        text: string;
        sn: string;
    }): Promise<Profile>;
    findTokenOne(authToken: IAuthToken): Promise<Token>;
    findTokenAll(authUser: IAuthUser): Promise<Token[]>;
    enableToken(authUser: IAuthUser, params: {
        id: string;
    }): Promise<Token>;
    disableToken(authUser: IAuthUser, params: {
        id: string;
    }): Promise<Token>;
    updateToken(authUser: IAuthUser, params: {
        id: string;
    }): Promise<Token>;
    createToken(authUser: IAuthUser, params: {
        client: string;
    }): Promise<Token>;
    setTokenStorage(authToken: IAuthToken, params: {
        value: string;
    }): Promise<void>;
    getTokenStorage(authToken: IAuthToken): Promise<string>;
    createTokenReq(authToken: IAuthToken): Promise<ITokenReqAPI>;
    findTokenReq(params: {
        id: string;
        key: string;
    }): Promise<Token>;
    findUserID(params: {
        sn: string;
    }): Promise<string>;
    createUser(params: {
        sn: string;
        pass: string;
    }): Promise<User>;
    updateUser(authUser: IAuthUser, params: {
        pass: string;
        sn: string;
    }): Promise<User>;
    createClient(authUser: IAuthUser, params: {
        name: string;
        url: string;
    }): Promise<Client>;
    updateClient(authUser: IAuthUser, params: {
        id: string;
        name: string;
        url: string;
    }): Promise<Client>;
    findClientOne(authUser: IAuthUser | null, params: {
        id: string;
    }): Promise<Client>;
    findClientIn(authUser: IAuthUser | null, params: {
        ids: string[];
    }): Promise<Client[]>;
    findClientAll(authUser: IAuthUser): Promise<Client[]>;
    authUser(authUser: IAuthUser): Promise<void>;
}
