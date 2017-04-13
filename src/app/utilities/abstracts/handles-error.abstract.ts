import { ErrorService } from '../services';

export abstract class HandlesError {
  constructor( public errorSvc: ErrorService ) { }

  handleError(error) {
    this.errorSvc.addError(error);
  }
}
