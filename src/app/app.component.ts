import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

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

  ngOnInit() {
    console.log(
      `Welcome to paynoattn.com.
       The source code for this website can be located at: 
       ${repoUrl}`
    );
    this.busy = undefined;
  }
}
