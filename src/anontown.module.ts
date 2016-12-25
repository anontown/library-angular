import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
    AtApiService,
} from './api';



@NgModule({
    imports: [
        //モジュール
        HttpModule
    ],
    declarations: [
        //パイプ、コンポーネント
    ],
    exports: [
        //パイプ、コンポーネント
    ],
    providers: [
        //サービス
        AtApiService
    ]
})
export class AnontownModule {
}