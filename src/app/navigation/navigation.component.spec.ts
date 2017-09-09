/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppService } from '../app.service';
import { NavigationComponent } from './navigation.component';
import { NavigationService } from './navigation.service';
import { mockSocialMediaAccounts } from './socialmedia-account.mock';
import { NavigationServiceStub } from './navigation.service.stub';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let mockService: NavigationServiceStub;
  let appSvc: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    }).overrideComponent(NavigationComponent, {
      set: {
        providers: [
          AppService,
          { provide: NavigationService, useClass: NavigationServiceStub },
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    mockService = fixture.debugElement.injector.get(NavigationService);
    appSvc = fixture.debugElement.injector.get(AppService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default props', () => {
    expect(component.isWelcome).toEqual(false);
    expect(component.leaving).toBeDefined();
  });
  it('should get Categories on init', () => {
    const spy = spyOn(mockService, 'getAccounts').and.returnValue(
      Observable.of(mockSocialMediaAccounts)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.socialMediaAccounts.length).toBeTruthy();
    expect(spy.calls.any()).toEqual(true);
  });
  it('should close', () => {
    const spy = spyOn(appSvc, 'updateModal');
    component.close();
    expect(spy.calls.any()).toEqual(true);
    component.leaving.take(1).subscribe(e => expect(e).toBeTruthy());
  });
});
