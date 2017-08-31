import { Observable } from 'rxjs/Rx';

import { mockPost } from './post.mock';

/* istanbul ignore next */
export class PostsServiceStub {
  getAllPosts() {
    return Observable.of([mockPost(), mockPost()]);
  }

  getCategoryPosts(category) {
    return Observable.of([ mockPost() ]);
  }
}
