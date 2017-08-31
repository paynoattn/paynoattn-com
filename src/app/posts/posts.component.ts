import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  category: string;

  constructor(
    private appSvc: AppService,
    private postSvc: PostsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.appSvc.updateLoading('Loading Posts...');
    this._activatedRoute.params
      .switchMap(route => {
        this.category = route['category'];
        if (this.category) {
          return this.postSvc.getCategoryPosts(this.category);
        } else {
          return this.postSvc.getAllPosts();
        }
      })
      .subscribe(res => {
        this.appSvc.updateLoading(undefined);
        this.posts = res;
      });
  }

  route() {
    this._router.navigate(['/posts/' + this.category]);
  }

  postColor(post: Post) {
    return post.categories[0] === 'development' ? 'primary' : post.categories[0] === 'writing' ?
      'secondary' : post.categories[0] === 'design' ? 'tertiary' : 'dark';
  }
}
