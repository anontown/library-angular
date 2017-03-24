import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AtApiService, } from './api';
var AnontownModule = (function () {
    function AnontownModule() {
    }
    return AnontownModule;
}());
export { AnontownModule };
AnontownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    //モジュール
                    HttpModule
                ],
                declarations: [],
                exports: [],
                providers: [
                    //サービス
                    AtApiService
                ]
            },] },
];
/** @nocollapse */
AnontownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=anontown.module.js.map