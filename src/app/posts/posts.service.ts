import { Injectable } from '@angular/core';

import { Post } from './post';
import { DataService } from '../utils'

@Injectable()
export class PostsService {
  private apiRoute = '/posts';
  private perPAge = '?perPage=50';

  constructor(private dataSvc: DataService) { }

  getAllPosts() {
    return this.dataSvc.get(this.apiRoute + this.perPAge);
  }

  getCategoryPosts(category) {
    return this.dataSvc.get(this.apiRoute + '/' + category + this.perPAge);
  }
}
