import { Route } from '@angular/router';

import { HomeComponent } from './home';
import { FourOFourComponent } from './four-o-four';

export const APP_ROUTES: Route[] = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', component: FourOFourComponent
  }
]
