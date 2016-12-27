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

// import our component for testing.
import { AppComponent } from './app.component';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default props', fakeAsync(() => {
    expect(component.busy).toEqual('Loading application...');
    expect(component.showWelcome).toEqual(true);
  }));
  it('should log on init', fakeAsync(() => {
    spyOn(console, 'log');
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
    expect(component.busy).toEqual(undefined);
  }));
});
