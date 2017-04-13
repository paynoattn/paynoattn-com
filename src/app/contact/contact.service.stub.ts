import { Observable } from 'rxjs/Rx';
import { Contact } from './contact';

/* istanbul ignore next */
export class ContactStub {
  send(contact: Contact) {
    return Observable.of({ success: true });
  }
}
