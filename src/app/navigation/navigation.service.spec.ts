import { TestBed, inject } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationService]
    });
  });

  it('should be created', inject([NavigationService], (service: NavigationService) => {
    expect(service).toBeTruthy();
    expect(service.socialMediaAccounts).toBeDefined();
  }));
  it('should getValue', inject([NavigationService], (service: NavigationService) => {
    service.getAccounts().subscribe(res => {
      expect(res.length).toEqual(service.socialMediaAccounts.length)
    });
  }));
});
