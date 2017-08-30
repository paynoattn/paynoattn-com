import { TestBed, inject } from '@angular/core/testing';

import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironmentService]
    });
  });

  it('should be created', inject([EnvironmentService], (service: EnvironmentService) => {
    expect(service).toBeTruthy();
  }));
  it('should getValue', inject([EnvironmentService], (service: EnvironmentService) => {
    expect(service.getValue('name')).toEqual('develop');
  }));
});
