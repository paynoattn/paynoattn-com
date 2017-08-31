import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';
import { Post } from './post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(
    private appSvc: AppService,
    private postSvc: PostsService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.appSvc.updateLoading('Loading Posts...');
    this._activatedRoute.params
      .switchMap(route => {
        if (route['category']) {
          return this.postSvc.getCategoryPosts(route['category']);
        } else {
          return this.postSvc.getAllPosts();
        }
      })
      .subscribe(res => {
        this.appSvc.updateLoading(undefined);
        this.posts = res;
      });
  }

  postColor(post: Post) {
    return post.categories[0] === 'development' ? 'primary' : post.categories[0] === 'writing' ?
      'secondary' : post.categories[0] === 'design' ? 'tertiary' : 'dark';
  }
}
