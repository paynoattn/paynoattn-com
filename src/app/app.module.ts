import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home';
import { NavigationComponent } from './navigation';
import { FourOFourComponent } from './four-o-four/';
import { PostsComponent, PostsService } from './posts';
import {
  DataService,
  EnvironmentService,
  LimitToPipe
} from './utils';

@NgModule({
  declarations: [
    AppComponent,
    FourOFourComponent,
    HomeComponent,
    LimitToPipe,
    NavigationComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    AppService,
    DataService,
    EnvironmentService,
    PostsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
