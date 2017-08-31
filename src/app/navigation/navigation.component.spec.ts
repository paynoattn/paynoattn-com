/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from './navigation.service';
import {
  mockSocialMediaAccounts,
  NavigationServiceStub
} from '../utils';

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
    expect(component.hamburger).toEqual(false);
  });
  it('should get Categories', () => {
    const spy = spyOn(mockService, 'getCategories').and.returnValue(
      Observable.of(mockSocialMediaAccounts)
    );
    component.getCategories().subscribe(accounts => {
      expect(accounts).toEqual(mockSocialMediaAccounts);
    });
    expect(spy.calls.any()).toEqual(true);
  });
});
