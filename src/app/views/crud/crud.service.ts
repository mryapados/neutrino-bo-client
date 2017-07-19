import { SearchRequest } from './../../models/searchrequest';
import { Page } from './../../models/page';
import { PageRequest } from './../../models/pagerequest';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';

@Injectable()
export class CrudService {

    constructor(private http: Http, @Inject('API_URL') private baseUrl: string) { }

    loadPage(type: String, pageRequest: PageRequest, searchRequest: SearchRequest): Observable<any[]> {
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

      console.log(`${this.baseUrl}/list/${type}${parameters}`);

      return this.http.get(`${this.baseUrl}/list/${type}${parameters}`)
        .map(resp => resp.json())
        // Re-hydrate
        .map(quizArray => quizArray.map(pageData => new Page(pageData)));
    }

}
