import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { DataService, DataStub } from '../utils';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsService,
        { provide: DataService, useClass: DataStub }
      ]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
