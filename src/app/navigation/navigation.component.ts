import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';

import { SocialMediaAccount } from '../utils';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ NavigationService ]
})

export class NavigationComponent implements OnInit {
  @Output() leaving = new EventEmitter();
  isWelcomeSubject = new BehaviorSubject<boolean>(false);
  isWelcome: boolean;
  socialMediaAccounts: SocialMediaAccount[];
  hamburger: boolean = false;

  constructor(
    private navService: NavigationService,
    private _router: Router
  ) { 
    this.isWelcomeSubject
      .distinctUntilChanged()
      .subscribe(isWelcome => this.isWelcome = isWelcome);
  }

  getCategories() {
    return this.navService.getCategories();
  }

  showHamburger() {
    this.hamburger = !this.hamburger;
  }

  passShowHide(instruction: boolean) {
    this.leaving.emit({ value: true });
  }

  ngOnInit() {
    this.getCategories().subscribe((accounts) => {
      this.socialMediaAccounts = accounts;
    });
    this._router.events.subscribe(
      e => this.isWelcomeSubject.next(e['url'] === '/' || e['url'] === '')
    );
  }
}
