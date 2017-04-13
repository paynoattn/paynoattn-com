import { Injectable } from '@angular/core';

Injectable()

export class ErrorService {

  errors: string[] = [];

  addError(error: string) {
    this.errors.push(error);
  }

  removeError(error: string) {
    this.errors.splice( this.errors.indexOf(error), 1 );
  }
}
