import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable } from 'rxjs/Rx';

import { DataService } from './data.service';
import { EnvironmentService, EnvironmentStub } from '../environment';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        { provide: EnvironmentService, useClass: EnvironmentStub },
        DataService
      ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
  it('should get', inject([DataService, XHRBackend], (service: DataService, backend: MockBackend) => {
    const mockResponse = { foo: 'bar' };
    backend.connections.subscribe((connection: MockConnection) => {
      const options: any = new ResponseOptions({
        body: mockResponse,
        status: 404
      });
      const response: any = new Response(options);
      connection.mockRespond(response);
    });
    const spy = spyOn(service, 'extractData')
      .and.returnValue(mockResponse);
    service.get('abcd').subscribe(res => {
      expect(res).toEqual(mockResponse);
      expect(spy.calls.any()).toEqual(true);
    });
  }));
  it('should get and handle error', async(inject([DataService, XHRBackend], (service: DataService, backend: MockBackend) => {
    const mockErr = { error: 'there was an error' };
    backend.connections.subscribe((connection: MockConnection) => {
      const options: any = new ResponseOptions({
        body: mockErr,
        status: 404
      });
      const response: any = new Response(options);
      connection.mockError(response);
    });
    const spy = spyOn(service, 'handleError')
      .and.returnValue(Observable.throw('err'));
    service.get('abcd').subscribe(
      res => fail('expected eror'),
      err => {
        expect(err).toBeTruthy();
        expect(spy.calls.any()).toEqual(true);
      }
    );
  })));
  it('should post', inject([DataService, XHRBackend], (service: DataService, backend: MockBackend) => {
    const mockResponse = { foo: 'bar' };
    backend.connections.subscribe((connection) => {
      const options: any = new ResponseOptions({
        body: mockResponse,
        status: 404
      });
      const response: any = new Response(options);
      connection.mockRespond(response);
    });
    const spy = spyOn(service, 'extractData')
      .and.returnValue(mockResponse);
    service.post('abcd', mockResponse).subscribe(res => {
      // expect(res).toEqual(mockResponse);
      expect(spy.calls.any()).toEqual(true);
    });
  }));
  it('should put', inject([DataService, XHRBackend], (service: DataService, backend: MockBackend) => {
    const mockResponse = { foo: 'bar' };
    backend.connections.subscribe((connection) => {
      const options: any = new ResponseOptions({
        body: mockResponse,
        status: 404
      });
      const response: any = new Response(options);
      connection.mockRespond(response);
    });
    const spy = spyOn(service, 'extractData')
      .and.returnValue(mockResponse);
    service.put('abcd', mockResponse).subscribe(res => {
      // expect(res).toEqual(mockResponse);
      expect(spy.calls.any()).toEqual(true);
    });
  }));
  it('should delete', inject([DataService, XHRBackend], (service: DataService, backend: MockBackend) => {
    const mockResponse = { success: true };
    backend.connections.subscribe((connection) => {
      const options: any = new ResponseOptions({
        body: mockResponse,
        status: 404
      });
      const response: any = new Response(options);
      connection.mockRespond(response);
    });
    const spy = spyOn(service, 'extractData')
      .and.returnValue(mockResponse);
    service.delete('abcd').subscribe(res => {
      // expect(res).toEqual(mockResponse);
      expect(spy.calls.any()).toEqual(true);
    });
  }));
});
