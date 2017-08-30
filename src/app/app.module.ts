import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NavigationComponent } from './navigation';
import { FourOFourComponent } from './four-o-four/';
import { PostsComponent, PostsService } from './posts';
import {
  DataService,
  EnvironmentService
} from './utils';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FourOFourComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    DataService,
    EnvironmentService,
    PostsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
