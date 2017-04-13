import { Injectable } from '@angular/core';
import { environment, Env } from '../../../environments';

@Injectable()

export class EnvironmentService {
  private env: Env = environment;

  getValue(type: string) {
    return this.env[type];
  }
}
