import { CanActivateAuthGuard } from './can-activate.authguard';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginComponent} from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports     : [BrowserModule, FormsModule],
    providers   : [AuthenticationService, CanActivateAuthGuard],
})

export class LoginModule {}
