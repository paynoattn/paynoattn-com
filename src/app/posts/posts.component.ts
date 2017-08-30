import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  constructor(private postSvc: PostsService) { }

  ngOnInit() {
    this.postSvc.getAllPosts().subscribe(res => {
      console.log(res);
    });
  }
}
