// Import angular and other 3rd party dependencies.
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

// import our component for testing.
import { ContactService } from './contact.service';

import {
  DataService,
  DataStub,
  EnvironmentService,
  EnvironmentStub,
} from '../utilities';

import { mockContact } from './contact.mock';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DataService, useClass: DataStub },
        { provide: EnvironmentService, useClass: EnvironmentStub },
        ContactService
      ]
    });
  });
  it('should construct', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
  it('should contact', inject(
    [ContactService, DataService], (service: ContactService, data: DataService) => {
      const spy = spyOn(data, 'post').and.returnValue(
        Observable.of({ success: true })
      );
      const spy2 = spyOn(service, 'makeUrl').and.returnValue(
        'http://api.com/contact'
      );
      service.send(mockContact).subscribe(
        res => expect(res['success']).toEqual(true)
      );
      expect(spy.calls.any()).toEqual(true);
      expect(spy2.calls.any()).toEqual(true);
  }));
});
