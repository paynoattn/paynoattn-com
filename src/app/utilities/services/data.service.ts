import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class DataService {

  constructor(private http: Http) { }

  get(url: string) {
    return this.http.get(url).map(
      res => this.transformResponse(res)
    ).catch(
      err => this.handleFailure(err)
    );
  }

  post(url: string, data: any) {
    return this.http.post(url, data).map(
      res => this.transformResponse(res)
    ).catch(
      err => this.handleFailure(err)
    );
  }

  private transformResponse(response: Response) {
    console.log(response);
    return response.json();
  }

  private handleFailure(response: Response) {
    let err = 'Whoops! Weve run into an error!';
    if (response.status) {
      err += '/n Error code: ' + response.status;
    }
    return Observable.throw(err);
  }
 }
