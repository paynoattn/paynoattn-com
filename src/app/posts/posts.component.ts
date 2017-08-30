import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private postSvc: PostsService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params
      .switchMap(route => {
        if (route['category']) {
          return this.postSvc.getCategoryPosts(route['category']);
        } else {
          return this.postSvc.getAllPosts();
        }
      })
      .subscribe(res => this.posts = res);
  }

  postColor(post: Post) {
    return post.categories[0] === 'development' ? 'primary' : post.categories[0] === 'writing' ?
      'secondary' : post.categories[0] === 'design' ? 'tertiary' : 'dark';
  }
}
