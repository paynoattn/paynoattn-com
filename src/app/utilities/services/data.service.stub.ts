import { Observable } from 'rxjs/Rx';

export class DataStub {
  get(url: string) {
    return Observable.of(url);
  }

  post(url: string, data: any) {
    return Observable.of({ success: true });
  }
 }
