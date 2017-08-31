import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class AppService {
  busy = new BehaviorSubject<string>(undefined);

  updateLoading(busy: string) {
    this.busy.next(busy);
  }
}
