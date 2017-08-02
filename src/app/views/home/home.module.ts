import { SharedModule } from './../../shared/shared.module';
import { ToolsModule } from './../../components/common/tools/tools.module';
import { LayoutsModule } from './../../components/common/layouts/layouts.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [HomeComponent],
    imports     : [BrowserModule, SharedModule],
})
export class HomeModule {

    constructor() { }



}
