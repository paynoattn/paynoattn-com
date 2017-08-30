import { Observable } from 'rxjs/Rx';

import { mockPost } from './post.mock';

export class PostsServiceStub {
  getAllPosts() {
    return Observable.of([mockPost(), mockPost()]);
  }

  getCategoryPosts(category) {
    return Observable.of([ mockPost() ]);
  }
}
