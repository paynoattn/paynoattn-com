/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from './navigation.service';
import { mockSocialMediaAccounts } from './socialmedia-account.mock';
import { NavigationServiceStub } from './navigation.service.stub';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let mockService: NavigationServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ]
    }).overrideComponent(NavigationComponent, {
      set: {
        providers: [
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
});
