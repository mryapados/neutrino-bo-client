import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';

@Component({
    selector: 'login',
    templateUrl: 'login.template.html'
})
export class LoginComponent implements OnInit {
//@Inject('API_URL') private baseUrl: string
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['home']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            }, error => {
              this.loading = false;
              this.error = error;
            });
    }
}
