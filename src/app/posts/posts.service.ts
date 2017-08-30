import { Injectable } from '@angular/core';

import { Post } from './post';
import { DataService } from '../utils'

@Injectable()
export class PostsService {
  private apiRoute = '/posts';

  constructor(private dataSvc: DataService) { }

  getAllPosts() {
    return this.dataSvc.get(this.apiRoute);
  }

  getCategoryPosts(category) {
    return this.dataSvc.get(this.apiRoute + '/' + category);
  }
}
