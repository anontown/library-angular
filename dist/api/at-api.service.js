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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Client, Token, Topic, Res, Msg, Profile, User, History } from './object';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
var AtError = (function () {
    function AtError(statusCode, type, errors) {
        this.statusCode = statusCode;
        this.type = type;
        this.errors = errors;
    }
    return AtError;
}());
export { AtError };
var AtApiService = AtApiService_1 = (function () {
    function AtApiService(http) {
        this.http = http;
    }
    AtApiService.prototype.request = function (name, params, authToken, authUser, recaptcha) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = AtApiService_1.serverURL + name;
                        headers = new Headers();
                        headers.append('Content-Type', 'application/json');
                        return [4 /*yield*/, this.http.post(url, JSON.stringify({ authUser: authUser, authToken: authToken, recaptcha: recaptcha, params: params }), {
                                headers: headers
                            }).toPromise().catch(function (r) {
                                var data = r.json().message;
                                throw new AtError(r.status, data.type, data.errors);
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                }
            });
        });
    };
    //[res]
    AtApiService.prototype.createRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Res.bind;
                        return [4 /*yield*/, this.request("/res/create", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Res, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findResOne = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Res.bind;
                        return [4 /*yield*/, this.request("/res/find/one", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Res, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findResIn = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/res/find/in", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (r) { return new Res(r); })];
                }
            });
        });
    };
    AtApiService.prototype.findRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/res/find", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (r) { return new Res(r); })];
                }
            });
        });
    };
    AtApiService.prototype.findResNew = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/res/find/new", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (r) { return new Res(r); })];
                }
            });
        });
    };
    AtApiService.prototype.findResHash = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/res/find/hash", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (r) { return new Res(r); })];
                }
            });
        });
    };
    AtApiService.prototype.findResReply = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/res/find/reply", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (r) { return new Res(r); })];
                }
            });
        });
    };
    AtApiService.prototype.findResNotice = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/res/find/notice", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (r) { return new Res(r); })];
                }
            });
        });
    };
    AtApiService.prototype.findResNoticeNew = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/res/find/notice/new", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (r) { return new Res(r); })];
                }
            });
        });
    };
    AtApiService.prototype.uvRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Res.bind;
                        return [4 /*yield*/, this.request("/res/uv", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Res, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.dvRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Res.bind;
                        return [4 /*yield*/, this.request("/res/dv", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Res, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.cvRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Res.bind;
                        return [4 /*yield*/, this.request("/res/cv", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Res, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.delRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Res.bind;
                        return [4 /*yield*/, this.request("/res/del", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Res, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    //[topic]
    AtApiService.prototype.createTopic = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Topic.bind;
                        return [4 /*yield*/, this.request("/topic/create", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Topic, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findTopicOne = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Topic.bind;
                        return [4 /*yield*/, this.request("/topic/find/one", params, null, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Topic, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findTopicIn = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/topic/find/in", params, null, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (t) { return new Topic(t); })];
                }
            });
        });
    };
    AtApiService.prototype.findTopicTags = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/topic/find/tags", params, null, null, null)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    AtApiService.prototype.findTopic = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/topic/find", params, null, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (t) { return new Topic(t); })];
                }
            });
        });
    };
    AtApiService.prototype.updateTopic = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Topic.bind;
                        return [4 /*yield*/, this.request("/topic/update", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Topic, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    //[history]
    AtApiService.prototype.findHistoryOne = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = History.bind;
                        return [4 /*yield*/, this.request("/history/find/one", params, null, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(History, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findHistoryIn = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/history/find/in", params, null, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (h) { return new History(h); })];
                }
            });
        });
    };
    AtApiService.prototype.findHistoryAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/history/find/all", params, null, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (h) { return new History(h); })];
                }
            });
        });
    };
    //[msg]
    AtApiService.prototype.findMsgOne = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Msg.bind;
                        return [4 /*yield*/, this.request("/msg/find/one", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Msg, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findMsgIn = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/msg/find/in", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (m) { return new Msg(m); })];
                }
            });
        });
    };
    AtApiService.prototype.findMsg = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/msg/find", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (m) { return new Msg(m); })];
                }
            });
        });
    };
    AtApiService.prototype.findMsgNew = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/msg/find/new", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (m) { return new Msg(m); })];
                }
            });
        });
    };
    //[profile]
    AtApiService.prototype.createProfile = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Profile.bind;
                        return [4 /*yield*/, this.request("/profile/create", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Profile, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findProfileOne = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Profile.bind;
                        return [4 /*yield*/, this.request("/profile/find/one", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Profile, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findProfileIn = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/profile/find/in", params, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (p) { return new Profile(p); })];
                }
            });
        });
    };
    AtApiService.prototype.findProfileAll = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/profile/find/all", null, authToken, null, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (p) { return new Profile(p); })];
                }
            });
        });
    };
    AtApiService.prototype.updateProfile = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Profile.bind;
                        return [4 /*yield*/, this.request("/profile/update", params, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Profile, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    //[token]
    AtApiService.prototype.findTokenOne = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Token.bind;
                        return [4 /*yield*/, this.request("/token/find/one", null, authToken, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Token, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findTokenAll = function (authUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/find/all", null, null, authUser, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (t) { return new Token(t); })];
                }
            });
        });
    };
    AtApiService.prototype.enableToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Token.bind;
                        return [4 /*yield*/, this.request("/token/enable", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Token, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.disableToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Token.bind;
                        return [4 /*yield*/, this.request("/token/disable", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Token, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.updateToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Token.bind;
                        return [4 /*yield*/, this.request("/token/update", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Token, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.createToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Token.bind;
                        return [4 /*yield*/, this.request("/token/create", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Token, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.setTokenStorage = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/storage/set", params, authToken, null, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.getTokenStorage = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/storage/get", params, authToken, null, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.delTokenStorage = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/storage/delete", params, authToken, null, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.listTokenStorage = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/storage/list", null, authToken, null, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.createTokenReq = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/req/create", null, authToken, null, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.findTokenReq = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Token.bind;
                        return [4 /*yield*/, this.request("/token/find/req", params, null, null, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Token, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    //[user]
    AtApiService.prototype.findUserID = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/user/find/id", params, null, null, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.createUser = function (recaptcha, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = User.bind;
                        return [4 /*yield*/, this.request("/user/create", params, null, null, recaptcha)];
                    case 1: return [2 /*return*/, new (_a.apply(User, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.updateUser = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = User.bind;
                        return [4 /*yield*/, this.request("/user/update", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(User, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    //[client]
    AtApiService.prototype.createClient = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Client.bind;
                        return [4 /*yield*/, this.request("/client/create", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Client, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.updateClient = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Client.bind;
                        return [4 /*yield*/, this.request("/client/update", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Client, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findClientOne = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = Client.bind;
                        return [4 /*yield*/, this.request("/client/find/one", params, null, authUser, null)];
                    case 1: return [2 /*return*/, new (_a.apply(Client, [void 0, _c.sent()]))()];
                }
            });
        });
    };
    AtApiService.prototype.findClientIn = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/client/find/in", params, null, authUser, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (c) { return new Client(c); })];
                }
            });
        });
    };
    AtApiService.prototype.findClientAll = function (authUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/client/find/all", null, null, authUser, null)];
                    case 1: return [2 /*return*/, (_a.sent()).map(function (c) { return new Client(c); })];
                }
            });
        });
    };
    AtApiService.prototype.authUser = function (authUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/user/auth", null, null, authUser, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AtApiService;
}());
AtApiService.serverURL = "https://api.anontown.com";
AtApiService = AtApiService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AtApiService);
export { AtApiService };
var AtApiService_1;
