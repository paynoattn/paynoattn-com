import { Route } from '@angular/router';

import { HomeComponent } from './home';
import { PostsComponent } from './posts';
import { FourOFourComponent } from './four-o-four';

export const APP_ROUTES: Route[] = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'posts/:category', component: PostsComponent
  },
  {
    path: '**', component: FourOFourComponent
  }
]
