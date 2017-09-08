import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class AppService {
  busy = new BehaviorSubject<string>(undefined);
  modal = new BehaviorSubject<boolean>(false);

  updateLoading(busy: string) {
    this.busy.next(busy);
  }

  updateModal(modal: boolean) {
    this.modal.next(modal);
  }
}
