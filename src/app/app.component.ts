import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';

import { AppService } from './app.service';
import { EnvironmentService } from './utils';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  busy = 'Loading application...';
  isHomeSubject = new BehaviorSubject<boolean>(false);
  isHome: boolean;
  repoUrl: string;
  showWelcome = true;
  modal = false;

  constructor(
    private appSvc: AppService,
    private env: EnvironmentService,
    private _router: Router
  ) {
    this.isHomeSubject
      .distinctUntilChanged()
      .subscribe(isHome => this.isHome = isHome);
    this.appSvc.busy
      .debounceTime(100)
      .subscribe(busy => this.busy = busy);
    this.appSvc.modal
      .debounceTime(100)
      .subscribe(modal => this.modal = modal);
  }

  ngOnInit() {
    this._router.events.subscribe(e => {
      const showHome = e['url'] === '/' || e['url'] === '/#home';
      this.isHomeSubject.next(showHome);
      this.appSvc.updateModal(showHome);
    });
    this.repoUrl = this.env.getValue('repoUrl');
    console.log(
      `Welcome to paynoattn.com.
       The source code for this website can be located at:
       ${this.repoUrl}`
    );
    this.busy = undefined;
  }
}
