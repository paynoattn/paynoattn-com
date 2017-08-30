import { Observable } from 'rxjs/Rx';

export class RouterStub {
  events = Observable.of({ url: '/' });
  
  navigateByUrl(url: string) {
    return Promise.resolve(true);
  }

  navigate( commands: any[] ) { 
    return Promise.resolve(true);
  }
}
