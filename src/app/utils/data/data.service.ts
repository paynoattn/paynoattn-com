import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { EnvironmentService } from '../environment';

@Injectable()

export class DataService {
  private apiUrl;

  constructor(
    private envSvc: EnvironmentService,
    private _http: Http
  ) {
    this.apiUrl = envSvc.getValue('apiUrl');
   }

  get(url: string) {
    return this._http.get(this.apiUrl + url)
      .map(res => this.extractData(res))
      .catch(err => this.handleError(err));
  }

  post(url: string, body: any) {
    return this._http.post(this.apiUrl + url, body)
      .map(res => this.extractData(res))
      .catch(err => this.handleError(err));
  }

  put(url: string, body: any) {
    return this._http.put(this.apiUrl + url, body)
      .map(res => this.extractData(res))
      .catch(err => this.handleError(err));
  }

  delete(url: string) {
    return this._http.delete(this.apiUrl + url)
      .map(res => this.extractData(res))
      .catch(err => this.handleError(err));
  }

  extractData(res: Response) {
    return res.json() || { };
  }

  handleError(error: Response | any) {
    console.log('MATT DAMON');
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''}${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
