import { HomeModule } from './views/home/home.module';
import { environment } from './../environments/environment';
import { SharedModule } from './shared/shared.module';
import { CrudModule } from './views/crud/crud.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from './app.routes';
import { LOADER } from './app.translate';

import { AppComponent } from './app.component';

// App views
import {MainViewModule} from './views/main-view/main-view.module';
import {MinorViewModule} from './views/minor-view/minor-view.module';
import {LoginModule} from './views/login/login.module';
import {RegisterModule} from './views/register/register.module';

// App modules/components
import {LayoutsModule} from './components/common/layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    SharedModule,
    HttpModule, 

    // Views
    HomeModule,
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,

    // Modules
    LayoutsModule,

    RouterModule.forRoot(ROUTES),
    TranslateModule.forRoot(LOADER)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}, 
    {provide : 'AUTH_URL', useValue : environment.authUrl},
    {provide : 'API_URL', useValue : environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        console.log(browserLang);
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');


        // translate.use('en');
    }

}
