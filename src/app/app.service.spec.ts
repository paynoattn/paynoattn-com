import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
  it('should have props', inject([AppService], (service: AppService) => {
    expect(service.busy).toBeTruthy();
  }));
  it('should update loading', inject([AppService], (service: AppService) => {
    service.updateLoading('loading');
    service.busy.subscribe(e => expect(e).toEqual('loading'));
  }));
});
