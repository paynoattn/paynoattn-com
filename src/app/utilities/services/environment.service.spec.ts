// import our service for testing.
import { EnvironmentService } from './environment.service';

let service: EnvironmentService;

describe('EnvironmentService', () => {

  beforeEach(() => {
    service = new EnvironmentService();
  });

  it('should create and have default props', () => {
    expect(service).toBeTruthy();
  });
  it('should remove Errors', () => {
    const test = service.getValue('production');
    expect(test).toBeDefined();
  });
});
