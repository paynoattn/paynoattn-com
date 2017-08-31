import { Params, } from '@angular/router';
import { Observable } from 'rxjs/Rx';

/* istanbul ignore next */
export class ActivatedRouteStub {
  public params: Observable<Params> = Observable.of({
    category: 'development'
  });
}
