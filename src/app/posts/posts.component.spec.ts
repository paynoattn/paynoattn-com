import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { PostsServiceStub } from './posts.service.stub';
import { mockPost } from './post.mock';
import { ActivatedRouteStub } from '../utils';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let stub: PostsServiceStub;
  let route: ActivatedRouteStub;
  const mockPosts = [ mockPost(), mockPost() ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [
        { provide: PostsService, useClass: PostsServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    stub = fixture.debugElement.injector.get(PostsService);
    route = fixture.debugElement.injector.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should get posts on init', () => {
    const spy = spyOn(stub, 'getCategoryPosts')
      .and.returnValue(Observable.of(mockPosts));
    component.ngOnInit();
    fixture.detectChanges();
    expect(spy.calls.any()).toEqual(true);
    expect(component.posts.length).toEqual(mockPosts.length);
  });
  it('should return the post color', () => {
    const test1 = component.postColor({ categories: ['development'] });
    expect(test1).toEqual('primary');
    const test2 = component.postColor({ categories: ['writing'] });
    expect(test2).toEqual('secondary');
    const test3 = component.postColor({ categories: ['design'] });
    expect(test3).toEqual('tertiary');
    const test4 = component.postColor({ categories: ['foo'] });
    expect(test4).toEqual('dark');
  });
});
