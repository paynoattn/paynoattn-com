// Import angular and other 3rd party dependencies.
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  TestBed,
  getTestBed,
  async,
  fakeAsync,
  ComponentFixture
} from '@angular/core/testing';
import { Router } from '@angular/router';

// import our component for testing.
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import {
  EnvironmentService,
  EnvironmentStub,
  RouterStub
} from './utils';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let appSvc: AppService;

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        AppService,
        { provide: EnvironmentService, useClass: EnvironmentStub },
        { provide: Router, useClass: RouterStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    appSvc = fixture.debugElement.injector.get(AppService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default props', () => {
    expect(component.busy).toEqual('Loading application...');
    expect(component.showWelcome).toEqual(true);
    expect(component.isHome).toEqual(false);
  });
  it('should log, set isHome on init', () => {
    spyOn(console, 'log');
    spyOn(component.isHomeSubject, 'next');
    spyOn(appSvc, 'updateModal');
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
    expect(component.isHomeSubject.next).toHaveBeenCalledWith(true);
    expect(appSvc.updateModal).toHaveBeenCalledWith(true);
    expect(component.busy).toEqual(undefined);
  });
});
