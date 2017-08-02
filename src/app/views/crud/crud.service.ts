import { AuthenticationService } from './../login/authentication.service';
import { SearchRequest } from './../../models/searchrequest';
import { Page } from './../../models/page';
import { PageRequest } from './../../models/pagerequest';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';



@Injectable()
export class CrudService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  constructor(private http: Http, @Inject('API_URL') private baseUrl: string, private authenticationService: AuthenticationService) { }

  loadPage(type: String, pageRequest: PageRequest, searchRequest: SearchRequest): Observable<Page> {
    let operator = '?';
    const page = pageRequest.display;
    const search = searchRequest.display;
    let parameters = '';

    if (page){
      parameters += operator + page;
      operator = '&';
    }
    if (search){
      parameters += operator + search;
    }
    
    return this.http.get(`${this.baseUrl}/list/${type}${parameters}`, {headers: this.headers})
      .map(resp => resp.json())
      // Re-hydrate
      .map(pageData => new Page(pageData));

  }

}
