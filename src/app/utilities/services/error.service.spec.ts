// import our service for testing.
import { ErrorService } from './error.service';

let service: ErrorService;

describe('ErrorService', () => {

  beforeEach(() => {
    service = new ErrorService();
  });

  it('should create and have default props', () => {
    expect(service).toBeTruthy();
    expect(service.errors).toBeTruthy();
    expect(service.errors.length).toBeFalsy();
  });
  it('should add Errors', () => {
    service.errors = [];
    service.addError('dude');
    expect(service.errors.indexOf('dude')).toBeGreaterThan(-1);
  });
  it('should remove Errors', () => {
    service.errors = ['dude'];
    service.removeError('dude');
    expect(service.errors.indexOf('dude')).toEqual(-1);
  });
});
