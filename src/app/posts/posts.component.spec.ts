import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { PostsServiceStub } from './posts.service.stub';
import { mockPost } from './post.mock';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let stub: PostsServiceStub;
  const mockPosts = [ mockPost(), mockPost() ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [
        { provide: PostsService, useClass: PostsServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    stub = fixture.debugElement.injector.get(PostsService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should get posts on init', () => {
    const spy = spyOn(stub, 'getAllPosts')
      .and.returnValue(Observable.of(mockPosts));
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy.calls.any()).toEqual(true);
    expect(component.posts.length).toEqual(mockPosts.length);
  });
});
