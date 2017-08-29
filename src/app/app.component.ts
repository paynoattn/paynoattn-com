import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';

import { repoUrl } from './utils';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  busy: string = 'Loading application...';
  showWelcome: boolean = true;
  isHomeSubject = new BehaviorSubject<boolean>(false);
  isHome: boolean;

  constructor( private _router: Router ) {
    this.isHomeSubject
    .distinctUntilChanged()
    .subscribe(isHome => this.isHome = isHome);
  }

  ngOnInit() {
    this._router.events.subscribe(
      e => this.isHomeSubject.next(e['url'] === '/' || e['url'] === '/#home')
    );
    console.log(
      `Welcome to paynoattn.com.
       The source code for this website can be located at: 
       ${repoUrl}`
    );
    this.busy = undefined;
  }
}
