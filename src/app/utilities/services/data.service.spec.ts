// Import angular and other 3rd party dependencies.
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
// import our component for testing.
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        BaseRequestOptions,
        DataService,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });
  it('should construct', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
  it('should get', inject([DataService, MockBackend],
    (service: DataService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe(conn => {
      conn.mockRespond(new Response(new ResponseOptions({body: JSON.stringify({success: true})})));
    });
    service.get('http://123.com').subscribe(res => {
      console.log(res);
    });
  }));
});
