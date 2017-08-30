import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions, Headers } from '@angular/http';
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
  it('should post and handle error', async(inject([DataService, XHRBackend], (service: DataService, backend: MockBackend) => {
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
    service.post('abcd', { foo: 'bar' }).subscribe(
      res => fail('expected eror'),
      err => {
        expect(err).toBeTruthy();
        expect(spy.calls.any()).toEqual(true);
      }
    );
  })));
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
  it('should put and handle error', async(inject([DataService, XHRBackend], (service: DataService, backend: MockBackend) => {
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
    service.put('abcd', { foo: 'bar' }).subscribe(
      res => fail('expected eror'),
      err => {
        expect(err).toBeTruthy();
        expect(spy.calls.any()).toEqual(true);
      }
    );
  })));
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
    service.delete('abcd').subscribe(
      res => fail('expected eror'),
      err => {
        expect(err).toBeTruthy();
        expect(spy.calls.any()).toEqual(true);
      }
    );
  })));
  it('should extractData', inject([DataService], (service: DataService) => {
    const response = {
      json: jasmine.createSpy('foo')
    };
    service.extractData(response);
    expect(response.json).toHaveBeenCalled();
  }));
  it('should handleError when not an instanceOf response', inject([DataService], (service: DataService) => {
    const err = {
      json: jasmine.createSpy('foo'),
      message: 'dude',
      status: 500
    };
    service.handleError(err).subscribe(
      res => fail('err'),
      error => expect(error).toEqual(err.message)
    );
  }));
  it('should handleError when an instanceOf response', inject([DataService], (service: DataService) => {
    const options = new ResponseOptions({
      body: 'err',
      status: 500,
    });
    const err = new Response(options);
    spyOn(err, 'json').and.returnValue('bar');
    service.handleError(err).subscribe(
      res => fail('err'),
      error => expect(error).toEqual('Error: 500 -  - "bar"')
    );
    expect(err.json).toHaveBeenCalled();
  }));
});
