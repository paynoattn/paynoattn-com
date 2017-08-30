import { Observable } from 'rxjs/Rx';

export class DataStub {
  get(url: string) {
    return Observable.of({foo: 'bar'});
  }

  post(url: string, body: any) {
    return Observable.of({foo: 'bar'});
  }

  put(url: string, body: any) {
    return Observable.of({foo: 'bar'});
  }

  delete(url: string) {
    return Observable.of({sucess: true});
  }
}
