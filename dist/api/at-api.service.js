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
import { AtObjectCache } from './at-object-cache';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
var AtError = (function () {
    function AtError(status, message) {
        this.status = status;
        this.message = message;
    }
    return AtError;
}());
export { AtError };
var AtApiService = AtApiService_1 = (function () {
    function AtApiService(http) {
        this.http = http;
        this.cache = new AtObjectCache();
    }
    AtApiService.prototype.request = function (name, params, authToken, authUser) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, res, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = AtApiService_1.serverURL + name;
                        headers = new Headers();
                        headers.append('Content-Type', 'application/json');
                        return [4 /*yield*/, this.http.post(url, JSON.stringify({ authUser: authUser, authToken: authToken, params: params }), {
                                headers: headers
                            }).toPromise().catch(function (r) {
                                throw new AtError(r.status, r.json().message);
                            })];
                    case 1:
                        res = _a.sent();
                        json = res.json();
                        if (res.status === 200) {
                            return [2 /*return*/, json];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //[res]
    AtApiService.prototype.createRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addRes;
                        return [4 /*yield*/, this.request("/res/create", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findResOne = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addRes;
                        return [4 /*yield*/, this.request("/res/find/one", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findResIn = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addResList;
                        return [4 /*yield*/, this.request("/res/find/in", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addResList;
                        return [4 /*yield*/, this.request("/res/find", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findResNew = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addResList;
                        return [4 /*yield*/, this.request("/res/find/new", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findResHash = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addResList;
                        return [4 /*yield*/, this.request("/res/find/hash", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findResReply = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addResList;
                        return [4 /*yield*/, this.request("/res/find/reply", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findResNotice = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addResList;
                        return [4 /*yield*/, this.request("/res/find/notice", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findResNoticeNew = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addResList;
                        return [4 /*yield*/, this.request("/res/find/notice/new", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.uvRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addRes;
                        return [4 /*yield*/, this.request("/res/uv", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.dvRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addRes;
                        return [4 /*yield*/, this.request("/res/dv", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.delRes = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addRes;
                        return [4 /*yield*/, this.request("/res/del", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    //[topic]
    AtApiService.prototype.createTopic = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addTopic;
                        return [4 /*yield*/, this.request("/topic/create", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findTopicOne = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addTopic;
                        return [4 /*yield*/, this.request("/topic/find/one", params, null, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findTopicIn = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addTopicList;
                        return [4 /*yield*/, this.request("/topic/find/in", params, null, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findTopic = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addTopicList;
                        return [4 /*yield*/, this.request("/topic/find", params, null, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.updateTopic = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addTopic;
                        return [4 /*yield*/, this.request("/topic/update", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    //[msg]
    AtApiService.prototype.findMsgOne = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addMsg;
                        return [4 /*yield*/, this.request("/msg/find/one", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findMsgIn = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addMsgList;
                        return [4 /*yield*/, this.request("/msg/find/in", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findMsg = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addMsgList;
                        return [4 /*yield*/, this.request("/msg/find", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findMsgNew = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addMsgList;
                        return [4 /*yield*/, this.request("/msg/find/new", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    //[profile]
    AtApiService.prototype.createProfile = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addProfile;
                        return [4 /*yield*/, this.request("/profile/create", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findProfileOne = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addProfile;
                        return [4 /*yield*/, this.request("/profile/find/one", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findProfileIn = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addProfileList;
                        return [4 /*yield*/, this.request("/profile/find/in", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findProfileAll = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addProfileList;
                        return [4 /*yield*/, this.request("/profile/find/all", null, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.updateProfile = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addProfile;
                        return [4 /*yield*/, this.request("/profile/update", params, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    //[token]
    AtApiService.prototype.findTokenOne = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addToken;
                        return [4 /*yield*/, this.request("/token/find/one", null, authToken, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findTokenAll = function (authUser) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addTokenList;
                        return [4 /*yield*/, this.request("/token/find/all", null, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.enableToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addToken;
                        return [4 /*yield*/, this.request("/token/enable", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.disableToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addToken;
                        return [4 /*yield*/, this.request("/token/disable", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.updateToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addToken;
                        return [4 /*yield*/, this.request("/token/update", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.createToken = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addToken;
                        return [4 /*yield*/, this.request("/token/create", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.setTokenStorage = function (authToken, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/storage/set", params, authToken, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.getTokenStorage = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/storage/get", null, authToken, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.createTokenReq = function (authToken) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/token/req/create", null, authToken, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.findTokenReq = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addToken;
                        return [4 /*yield*/, this.request("/token/find/req", params, null, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    //[user]
    AtApiService.prototype.findUserID = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/user/find/id", params, null, null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AtApiService.prototype.createUser = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addUser;
                        return [4 /*yield*/, this.request("/user/create", params, null, null)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.updateUser = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addUser;
                        return [4 /*yield*/, this.request("/user/update", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    //[client]
    AtApiService.prototype.createClient = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addClient;
                        return [4 /*yield*/, this.request("/client/create", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.updateClient = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addClient;
                        return [4 /*yield*/, this.request("/client/update", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findClientOne = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addClient;
                        return [4 /*yield*/, this.request("/client/find/one", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findClientIn = function (authUser, params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addClientList;
                        return [4 /*yield*/, this.request("/client/find/in", params, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.findClientAll = function (authUser) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.cache).addClientList;
                        return [4 /*yield*/, this.request("/client/find/all", null, null, authUser)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent()])];
                }
            });
        });
    };
    AtApiService.prototype.authUser = function (authUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/user/auth", null, null, authUser)];
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
