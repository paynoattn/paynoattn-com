import { Injectable } from '@angular/core';

import { Contact } from './contact';
import {
  DataService,
  EnvironmentService
} from '../utilities';

@Injectable()

export class ContactService {

  constructor(
    private dataSvc: DataService,
    private env: EnvironmentService
  ) { }

  send(contact: Contact) {
    return this.dataSvc.post(this.makeUrl(), contact);
  }

  private makeUrl() {
    return this.env.getValue('contactApiUrl') + this.env.getValue('contactEmail');
  }
};
