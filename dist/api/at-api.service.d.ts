import { Client, Token, Topic, Res, Msg, Profile, User } from './object';
import { ITokenReqAPI } from './api-object';
import { IAuthUser, IAuthToken } from './auth';
import { AtObjectCache } from './at-object-cache';
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
    readonly cache: AtObjectCache;
    constructor(http: Http);
    private request(name, params, authToken, authUser);
    createRes(authToken: IAuthToken, params: {
        topic: string;
        name: string;
        text: string;
        reply: string | null;
        profile: string | null;
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
    delRes(authToken: IAuthToken, params: {
        id: string;
    }): Promise<Res>;
    createTopic(authToken: IAuthToken, params: {
        title: string;
        category: string[];
        text: string;
    }): Promise<Topic>;
    findTopicOne(params: {
        id: string;
    }): Promise<Topic>;
    findTopicIn(params: {
        ids: string[];
    }): Promise<Topic[]>;
    findTopic(params: {
        title: string;
        category: string[];
        skip: number;
        limit: number;
    }): Promise<Topic[]>;
    updateTopic(authToken: IAuthToken, params: {
        id: string;
        title: string;
        category: string[];
        text: string;
    }): Promise<Topic>;
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
    }): Promise<null>;
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
    authUser(authUser: IAuthUser): Promise<null>;
}
