import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { PostsService } from './posts.service';
import { mockPost } from './post.mock';
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
  it('should getAllPosts', inject([PostsService, DataService], (service: PostsService, stub: DataStub) => {
    const mockRes = [ mockPost(), mockPost() ],
          spy = spyOn(stub, 'get').and.returnValue(Observable.of(mockRes))
    service.getAllPosts().subscribe(res => {
      expect(res.length).toEqual(mockRes.length);
      expect(spy.calls.any()).toEqual(true);
    });
  }));
  it('should getCategoryPosts', inject([PostsService, DataService], (service: PostsService, stub: DataStub) => {
    const mockRes = [ mockPost(), mockPost() ],
          spy = spyOn(stub, 'get').and.returnValue(Observable.of(mockRes))
    service.getCategoryPosts('asdf').subscribe(res => {
      expect(res.length).toEqual(mockRes.length);
      expect(spy.calls.any()).toEqual(true);
    });
  }));
});
