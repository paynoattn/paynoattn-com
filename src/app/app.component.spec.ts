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

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      // NO_ERRORS_SCHEMA allows us to not have to declare children components
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
      });
  }));
  it('should have default props', fakeAsync(() => {
    expect(comp.busy).toEqual('Loading application...');
    expect(comp.showWelcome).toEqual(true);
  }));
  it('should log on init', fakeAsync(() => {
    spyOn(console, 'log');
    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));
});
