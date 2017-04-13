import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  NavigationComponent,
  NavigationService
} from './navigation';
import { ContactComponent } from './contact';
import {
  DataService,
  EnvironmentService
} from './utilities';

export const APP_DECLARATIONS = [
  AppComponent,
  NavigationComponent,
  ContactComponent
];

export const APP_PROVIDERS = [
  DataService,
  EnvironmentService,
  NavigationService
];

@NgModule({
  declarations: [ APP_DECLARATIONS ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ APP_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
